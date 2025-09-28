import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = "/assets/carpenter-working.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false
}: SEOProps) => {
  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `https://jpwcarpentry.com${canonicalUrl}`;

  // Ensure OG image is absolute
  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `https://jpwcarpentry.com${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="JPW Carpentry & Building" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@jpwcarpentry" />
      <meta name="twitter:creator" content="@jpwcarpentry" />
      
      {/* Business-specific meta tags */}
      <meta name="geo.region" content="GB-HAM" />
      <meta name="geo.placename" content="Hampshire" />
      <meta name="geo.position" content="50.8429;-1.0761" />
      <meta name="ICBM" content="50.8429, -1.0761" />
      
      {/* Mobile optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="JPW Carpentry & Building" />
      <meta name="copyright" content="JPW Carpentry & Building" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEO;