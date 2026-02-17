import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import useQueryManager from "@/hooks/useQueryManager";
import { cn } from "@/lib/utils";
import { useGetBlogsQuery } from "@/redux/features/blog";
import { Blog } from "@/redux/features/blog/blog.types";
import { Search } from "lucide-react";
import { memo, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";
import AppPagination from "@/components/shared/Pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { blogCategories } from "@/constants/blog_categories";

const BlogsSection = memo(() => {
  const { getQuery, setQuery, clearQuery } = useQueryManager();
  const debouncedSearch = useDebounce(getQuery("search"), 500);
  const currentPage = Number(getQuery("page")) || 1;
  const { data, isLoading, error } = useGetBlogsQuery({
    searchTerm: debouncedSearch ?? undefined,
    type: getQuery("type") ?? undefined,
    limit: Number(getQuery("limit")) || 2,
    page: currentPage,
  });

  const blogs = useMemo(() => data?.data ?? [], [data?.data]);

  const totalPages = data?.meta.totalPage || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const type = getQuery("type");

  return (
    <>
      {/* Search Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 grid md:grid-cols-5 gap-2 items-center">
          <div className="relative col-span-3">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              type="text"
              placeholder="Search articles..."
              value={getQuery("search") || ""}
              onChange={(e) => setQuery("search", e.target.value)}
              className="pl-10 py-3 border"
            />
          </div>
          <Select
            value={type ?? ""}  
            onValueChange={(value) => setQuery("type", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup> 
                {blogCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={clearQuery}>
            Reset Filters
          </Button>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-8 sm:pb-16 md:pt-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <Blogs blogs={blogs} isLoading={isLoading} error={error} />
        </div>
      </section>

      <div className="mt-4 sm:mt-8">
        <AppPagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={(page) => setQuery("page", String(page))}
        />
      </div>
    </>
  );
});

interface BlogsProps {
  blogs: Blog[];
  isLoading: boolean;
  error: any;
}

const Blogs = memo(({ blogs, isLoading, error }: BlogsProps) => {
  const { clearQuery } = useQueryManager();
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        <BlogCardSkeleton />
      </div>
    );
  }

  if (error) return <ApiErrorPage name="Blogs" />;

  if (blogs.length === 0) {
    return (
      <div className="text-center py-16 w-full">
        <p className="sm:text-lg text-muted-foreground mb-4">
          No blogs match your filters
        </p>
        <Button
          onClick={clearQuery}
          variant="outline"
          className={cn("", "cursor-pointer")}
        >
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
});

Blogs.displayName = "Blogs";
BlogsSection.displayName = "BlogsSection";

export default BlogsSection;
