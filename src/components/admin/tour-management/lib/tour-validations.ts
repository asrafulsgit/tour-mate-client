import { z } from "zod";

export const MAX_FILE_SIZE = 2 * 1024 * 1024;  
export const MAX_FILES = 5;

export const createTourSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    location: z.string().min(1, "Location is required"),

    costFrom: z.number().min(0),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),

    maxGuest: z.number().min(1),
    minAge: z.number().min(0),

    division: z.string().min(1, "Division is required"),
    tourType: z.string().min(1, "Tour type is required"),
    guide: z.string().optional(),

    included: z.array(z.object({ value: z.string() })),
    amenities: z.array(z.object({ value: z.string() })),
    tourPlan: z.array(z.object({ value: z.string() })),

    images: z
      .array(z.instanceof(File)) 
      .max(5, "Maximum 5 images allowed").optional(),
  })
  .refine(
    (data) => {
      return new Date(data.endDate) >= new Date(data.startDate);
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    },
  );

export type CreateTourFormValues = z.infer<typeof createTourSchema>;