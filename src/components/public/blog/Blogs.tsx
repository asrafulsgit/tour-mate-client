import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/mock/blogs";
import { ArrowRight, Calendar, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <>
      {/* Search Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 ">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 border border-primary/30"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-8 sm:pb-16 sm:pt-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group hover:bg-primary/5 border border-border rounded-lg overflow-hidden 
                  hover:border-primary transition"
                >
                  <div className="bg-muted p-6 text-4xl h-40 flex items-center justify-center group-hover:bg-muted/80 transition">
                    {post.image}
                  </div>
                  <div className="p-3 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="heading sm:text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="mt-4 flex items-center text-primary group-hover:translate-x-2 transition">
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No articles found matching your search.
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blogs;
