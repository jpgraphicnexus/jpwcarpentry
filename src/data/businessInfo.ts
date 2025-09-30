export interface BusinessInfo {
  name: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  gbp: {
    placeId: string;
    gbpId: string;
    url: string;
  };
  serviceRadius: number;
  businessHours: {
    [key: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
  serviceAreas: Array<{
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    distance: string;
    description: string;
  }>;
}

export const businessInfo: BusinessInfo = {
  name: "JPW Carpentry & Building",
  phone: "07399594658",
  email: "joewhitfield@jpwcarpentrybuilding.com",
  coordinates: {
    lat: 50.9448858,  // REAL GBP COORDINATES
    lng: -0.5723678   // REAL GBP COORDINATES
  },
  gbp: {
    placeId: "0xc75c49b807a6e895",
    gbpId: "15472808125046875562", 
    url: "https://www.google.com/maps/place/JPW+Carpentry+%26+Building/@50.9448857,-0.5723678,10z/data=!3m1!4b1!4m6!3m5!1s0x23ad25a9271cec8d:0xc75c49b807a6e895!8m2!3d50.9448858!4d-0.5723678!16s%2Fg%2F11zj4tk8s2"
  },
  serviceRadius: 25000, // 25km
  businessHours: {
    monday: { open: "08:00", close: "18:00" },
    tuesday: { open: "08:00", close: "18:00" },
    wednesday: { open: "08:00", close: "18:00" },
    thursday: { open: "08:00", close: "18:00" },
    friday: { open: "08:00", close: "18:00" },
    saturday: { open: "08:00", close: "16:00" },
    sunday: { open: "", close: "", closed: true }
  },
  serviceAreas: [
    {
      name: "Portsmouth",
      coordinates: { lat: 50.8198, lng: -1.0880 },
      distance: "15km",
      description: "Naval city with Victorian and modern properties"
    },
    {
      name: "Chichester", 
      coordinates: { lat: 50.8365, lng: -0.7792 },
      distance: "20km",
      description: "Cathedral city with heritage properties"
    },
    {
      name: "Havant",
      coordinates: { lat: 50.8551, lng: -0.9810 },
      distance: "12km", 
      description: "Family-focused residential area"
    },
    {
      name: "Gosport",
      coordinates: { lat: 50.7958, lng: -1.1297 },
      distance: "20km",
      description: "Coastal town with marine properties"
    },
    {
      name: "Fareham",
      coordinates: { lat: 50.8551, lng: -1.1865 },
      distance: "18km",
      description: "Executive residential area"
    }
  ]
};