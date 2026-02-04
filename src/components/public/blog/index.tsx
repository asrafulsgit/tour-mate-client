"use client";  
import BlogHero from "./Hero";
import Blogs from "./Blogs";
import BlogSubscribe from "./Subscribe";

function BlogPage() {
  return (
    <main className="grow">
      {/* Hero Section */}
      <BlogHero />

      {/* Blogs Section */}
      <Blogs />

      {/* Subscribe Section */}
      <BlogSubscribe />
    </main>
  );
}

export default BlogPage;
