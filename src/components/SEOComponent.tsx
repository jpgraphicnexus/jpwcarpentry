import { Helmet } from "react-helmet-async";

interface ArticleData {
  publishedTime: string;
  modifiedTime: string;
  author: string;
  section: string;
  tags: string[];
}

interface SEOComponentProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  article?: ArticleData;
}

const SEOComponent = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage,
  article 
}: SEOComponentProps) => {
  const fullUrl = `https://jpwcarpentry.lovable.app${canonicalUrl}`;
  const defaultImage = "/assets/carpenter-working.jpg";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content="JPW Carpentry" />
      
      {/* Article-specific Open Graph Tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEOComponent;