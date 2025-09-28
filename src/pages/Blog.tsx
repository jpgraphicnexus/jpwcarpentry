import { useState } from "react";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const Blog = () => {
  const seoData = useSEO('/blog');
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
    
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoData} />
      
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Building & Carpentry <span className="font-playfair text-golden">Insights</span>
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Expert advice, project showcases, and industry insights from our experienced team. 
              Get the knowledge you need for your next home improvement project.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={selectedCategory === "all" ? "bg-golden hover:bg-golden/90" : ""}
            >
              All Posts
            </Button>
            {blogCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-golden hover:bg-golden/90" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {featuredPost && selectedCategory === "all" && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6">Featured Article</h2>
                  <BlogCard post={featuredPost} featured={true} />
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(selectedCategory === "all" ? regularPosts : filteredPosts).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;