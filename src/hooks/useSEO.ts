import { useLocation } from "react-router-dom";
import { seoConfig, defaultSEO, getBlogPostSEO, type SEOData } from "@/data/seoData";
import { blogPosts } from "@/data/blogPosts";

export const useSEO = (routePath?: string): SEOData => {
  const location = useLocation();
  const currentPath = routePath || location.pathname;

  // Handle blog post routes
  if (currentPath.startsWith('/blog/') && currentPath !== '/blog') {
    const slug = currentPath.replace('/blog/', '');
    const blogPost = blogPosts.find(post => post.slug === slug);
    
    if (blogPost) {
      return getBlogPostSEO(blogPost.slug, blogPost.title, blogPost.excerpt, blogPost.tags);
    }
  }

  // Handle exact route matches
  if (seoConfig[currentPath]) {
    return seoConfig[currentPath];
  }

  // Handle dynamic routes with parameters
  const routePatterns = [
    { pattern: /^\/blog\/category\//, key: '/blog' },
    { pattern: /^\/services\//, key: '/services' }
  ];

  for (const { pattern, key } of routePatterns) {
    if (pattern.test(currentPath) && seoConfig[key]) {
      return seoConfig[key];
    }
  }

  // Return default SEO data for unknown routes
  return defaultSEO;
};