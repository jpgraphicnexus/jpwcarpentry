import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { BlogPost, blogCategories } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const category = blogCategories.find(cat => cat.id === post.category);
  
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.imageAlt}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-64' : 'h-48'
          }`}
          loading="lazy"
          decoding="async"
          srcSet={`${post.featuredImage}?w=400 400w, ${post.featuredImage}?w=800 800w`}
          sizes={featured ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 100vw, 400px"}
        />
        <div className="absolute top-4 left-4">
          <Badge className={`${category?.color} text-white`}>
            {category?.name}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.publishDate).toLocaleDateString('en-GB')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
          {post.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{post.location}</span>
            </div>
          )}
        </div>
        
        <CardTitle className={`line-clamp-2 group-hover:text-golden transition-colors ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className={`line-clamp-3 ${featured ? 'text-base' : 'text-sm'}`}>
          {post.excerpt}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;