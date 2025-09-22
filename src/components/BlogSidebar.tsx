import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogCategories, blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  const recentPosts = blogPosts.slice(0, 5);
  const popularTags = ["loft conversion", "home extension", "planning permission", "building regulations", "chichester"];

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Search articles..." />
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {blogCategories.map((category) => (
              <Link
                key={category.id}
                to={`/blog/category/${category.slug}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-accent transition-colors"
              >
                <span className="text-sm font-medium">{category.name}</span>
                <Badge variant="outline" className="text-xs">
                  {blogPosts.filter(post => post.category === category.id).length}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="flex gap-3">
                  <img
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    loading="lazy"
                    decoding="async"
                    srcSet={`${post.featuredImage}?w=64 64w, ${post.featuredImage}?w=128 128w`}
                    sizes="64px"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium line-clamp-2 group-hover:text-golden transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(post.publishDate).toLocaleDateString('en-GB')}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-golden hover:text-white transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-golden text-white">
        <CardHeader>
          <CardTitle className="text-lg">Need Expert Advice?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            Get professional guidance for your home improvement project.
          </p>
          <Link to="/#contact-section">
            <Button variant="secondary" className="w-full" asChild>
              <a href="/#contact-section">Get Free Quote</a>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;