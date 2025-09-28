import { Helmet } from "react-helmet-async";
import { homepageSchema, serviceSchemas, ServiceType } from "@/data/localBusinessSchema";

interface LocalBusinessSchemaProps {
  pageType: 'homepage' | 'service';
  serviceType?: ServiceType;
  customServices?: Array<{
    name: string;
    description: string;
  }>;
}

const LocalBusinessSchema = ({ pageType, serviceType, customServices }: LocalBusinessSchemaProps) => {
  let schemaData;

  if (pageType === 'homepage') {
    schemaData = homepageSchema;
  } else if (pageType === 'service' && serviceType) {
    schemaData = serviceSchemas[serviceType];
  } else {
    // Fallback to homepage schema
    schemaData = homepageSchema;
  }

  // If custom services are provided, override the hasOfferCatalog
  if (customServices && customServices.length > 0) {
    schemaData = {
      ...schemaData,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Specialized Services",
        itemListElement: customServices.map(service => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description
          }
        }))
      }
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;