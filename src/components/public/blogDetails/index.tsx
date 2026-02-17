"use client";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import BackButton from "@/components/shared/BackButton";
import { Button } from "@/components/ui/button";
import { useGetBlogQuery } from "@/redux/features/blog";
import { format } from "date-fns";
import { Calendar, User, Share2, Heart, ArrowLeft, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import BlogDetailsSkeleton from "./BlogDetailsSkeleton";

function BlogDetailPage() {
  const blogId = useParams().id as string;

  const { data, isLoading, error } = useGetBlogQuery(blogId);
  const blog = data?.data;
  if (isLoading) return <BlogDetailsSkeleton />;
  if (error) return <ApiErrorPage name="Blog details" />;

  if (!blog) {
    return (
      <main className="grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
            Blog Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The blog you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="grow">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 sm:pt-4">
          <div className="bg-muted p-8 rounded-lg h-48 sm:h-58 flex items-center justify-center mb-4 sm:mb-8 mt-4 sm:mt-0 relative">
            <Image
              src={blog.thumbnail}
              alt={blog.title || "Blog thumbnail"}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="mb-2 sm:mb-4">
            <div className="flex flex-wrap items-center gap-3 mb-2 sm:mb-4">
              <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                {blog.type}
              </span>
            </div>

            <h1 className="heading text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4 text-balance">
              {blog.title}
            </h1>

            <div className="text-sm sm:text-base flex flex-row items-center gap-2 sm:gap-4 text-muted-foreground mb-2 sm:mb-4">
              <div className="flex items-center gap-2">
                <User size={16} />
                {blog.createdBy.name}
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {format(blog.createdAt, "dd/mm/yyyy")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-6 sm:py-12">
        <div className="max-w-3xl mx-auto px-2 sm:px-4">
          <article className="prose prose-invert max-w-none">
            <div
              className="text-sm sm:text-base text-muted-foreground leading-relaxed 
            space-y-6 whitespace-pre-wrap"
            >
              {blog.description}
            </div>
          </article>

          {/* Author Bio */}
          <div className="mt-6 sm:mt-12 p-3 sm:p-6 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground shrink-0">
                {blog?.createdBy?.name?.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 sm:mb-2">
                  {blog?.createdBy?.name}
                </h4>
                {/* <p className="text-xs sm:text-sm text-muted-foreground">
                  {article.author} is a passionate travel writer and cultural
                  enthusiast exploring the hidden corners of Asia. When not
                  writing, they can be found hiking remote trails or discovering
                  new cuisines.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default BlogDetailPage;
