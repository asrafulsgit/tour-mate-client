import { Blog } from "@/redux/features/blog/blog.types";
import { format } from "date-fns";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link key={blog._id} href={`/blog/${blog._id}`}>
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-primary transition-all group cursor-pointer h-full flex flex-col">
        <div className="relative  w-full h-48 overflow-hidden bg-muted">
          <Image
            src={blog.thumbnail || "uploads/image.jpg"}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              {blog.type}
            </span>
          </div>
          <h3 className="heading sm:text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
            {blog.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {blog.description}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              {format(blog.createdAt, "dd MMMM yyyy")}
            </div>
          </div>
          <div className="mt-4 flex items-center text-primary group-hover:translate-x-2 transition">
            Read More
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
