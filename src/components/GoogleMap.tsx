import React from 'react';
import { businessInfo } from '@/data/businessInfo';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

interface GoogleMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  showServiceArea?: boolean;
  focusArea?: string;
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
    info?: string;
  }>;
  height?: string;
  className?: string;
  showDirections?: boolean;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  center = businessInfo.coordinates,
  zoom = 10,
  showServiceArea = false,
  focusArea,
  markers = [],
  height = "400px",
  className = "",
  showDirections = true
}) => {
  // Use Place ID for direct GBP integration
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'demo'}&q=place_id:${businessInfo.gbp.placeId}&zoom=${zoom}`;
  
  // Fallback to coordinates if API key not available
  const fallbackMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.123!2d${center.lng}!3d${center.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU2JzQxLjYiTiAwwrAzNCcyMC41Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk`;
  
  return (
    <div className={`google-map-container ${className}`}>
      <div className="relative">
        <iframe
          src={import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? mapUrl : fallbackMapUrl}
          width="100%"
          height={height}
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="JPW Carpentry & Building Location"
          className="shadow-lg"
        />
        
        {/* Service Area Overlay */}
        {showServiceArea && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
            <h4 className="font-semibold text-primary text-sm mb-2">Service Area</h4>
            <p className="text-xs text-muted-foreground">25km radius covering Hampshire</p>
          </div>
        )}
      </div>
      
      {showDirections && (
        <div className="map-actions mt-4 flex flex-col sm:flex-row gap-3">
          <Button asChild variant="default" className="bg-golden hover:bg-golden-hover text-dark-bg">
            <a
              href={businessInfo.gbp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
            </a>
          </Button>
          <Button asChild variant="outline" className="border-golden text-golden hover:bg-golden hover:text-dark-bg">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=place_id:${businessInfo.gbp.placeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </Button>
        </div>
      )}
      
      {/* Service Areas List */}
      {showServiceArea && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {businessInfo.serviceAreas.map((area, index) => (
            <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
              <h5 className="font-semibold text-primary text-sm">{area.name}</h5>
              <p className="text-xs text-muted-foreground">{area.distance}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoogleMap;