import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import SEOComponent from "@/components/SEOComponent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft, Share2 } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const category = blogCategories.find(cat => cat.id === post.category);
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOComponent
        title={`${post.title} | JPW Carpentry Blog`}
        description={post.metaDescription}
        keywords={post.tags.join(", ")}
        canonicalUrl={`/blog/${post.slug}`}
        ogImage={post.featuredImage}
        article={{
          publishedTime: post.publishDate,
          modifiedTime: post.lastModified,
          author: post.author,
          section: category?.name || "Building & Carpentry",
          tags: post.tags
        }}
      />
      
      <Header />
      
      {/* Breadcrumb */}
      <section className="w-full py-4 bg-primary/5 border-b">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 text-sm text-primary/70">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-primary font-medium">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="w-full py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Back Button */}
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className={`${category?.color} text-white`}>
                    {category?.name}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-golden rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">JW</span>
                    </div>
                    <div>
                      <p className="font-medium text-primary">{post.author}</p>
                      <p className="text-sm text-muted-foreground">Senior Carpenter & Builder</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={post.featuredImage}
                  alt={post.imageAlt}
                  className="w-full h-96 object-cover rounded-lg"
                  loading="eager"
                  decoding="async"
                  srcSet={`${post.featuredImage}?w=800 800w, ${post.featuredImage}?w=1200 1200w`}
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold text-primary mt-8 mb-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold text-primary mt-6 mb-3">{children}</h3>,
                    p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-muted-foreground space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-muted-foreground space-y-2">{children}</ol>,
                    strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-golden pl-4 italic text-muted-foreground my-6">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-bold text-primary mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-golden hover:text-white cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-gradient-to-r from-golden to-golden/90 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-white/90 mb-6">
                  Get expert advice and a free quote for your home improvement project. 
                  Our experienced team is ready to help bring your vision to life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/#contact-section">
                   <Button size="lg" variant="secondary" className="bg-white text-golden hover:bg-white/90"
                     onClick={() => {
                       const contactSection = document.getElementById('contact-section');
                       if (contactSection) {
                         contactSection.scrollIntoView({ behavior: 'smooth' });
                       } else {
                         // Navigate to home page and scroll after load
                         window.location.href = '/';
                         setTimeout(() => {
                           const section = document.getElementById('contact-section');
                           if (section) {
                             section.scrollIntoView({ behavior: 'smooth' });
                           }
                         }, 100);
                       }
                     }}
                   >
                     Get Free Quote
                   </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:border-white">
                      View Our Services
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                        <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                          <img
                            src={relatedPost.featuredImage}
                            alt={relatedPost.imageAlt}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                            srcSet={`${relatedPost.featuredImage}?w=400 400w, ${relatedPost.featuredImage}?w=600 600w`}
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                          <div className="p-4">
                            <h4 className="font-bold text-primary line-clamp-2 group-hover:text-golden transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-2">
                              {new Date(relatedPost.publishDate).toLocaleDateString('en-GB')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;