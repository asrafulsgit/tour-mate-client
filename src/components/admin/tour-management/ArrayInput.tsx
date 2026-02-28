"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

interface DynamicArrayFieldProps {
  name: "included" | "amenities" | "tourPlan";
  label: string;
  placeholder: string;
  useTextarea?: boolean;
}

export function DynamicArrayField({ 
  name, 
  label, 
  placeholder, 
  useTextarea = false 
}: DynamicArrayFieldProps) {
  const { control } = useFormContext();
  
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const getDayLabel = (index: number) => {
    if (name === "tourPlan") {
      return `Day ${index + 1}`;
    }
    return "";
  };

  return (
    <div className="space-y-3">
      <label className="text-sm mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label} : 
      </label>
      
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2">
          {useTextarea ? (
            <div className="flex-1 space-y-1">
              {getDayLabel(index) && (
                <p className="text-xs text-muted-foreground">{getDayLabel(index)}</p>
              )}
              <FormField
                control={control}
                name={`${name}.${index}.value`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Textarea
                        placeholder={placeholder}
                        {...field}
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ) : (
            <FormField
              control={control}
              name={`${name}.${index}.value`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder={placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="shrink-0"
            onClick={() => remove(index)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="mt-2"
        onClick={() => append({ value: "" })}
      >
        <Plus size={16} className="mr-2" />
        Add {label}
      </Button>
    </div>
  );
}