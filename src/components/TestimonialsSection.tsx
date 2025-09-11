import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "PO19",
      rating: 5,
      service: "Kitchen Steps & Carpentry",
      review: "Joe was great with his communication throughout. He was punctual and easy to contact during the whole process. He took great care with the job and amended some works to ensure a really high quality finish. Both my partner and I are very happy with the final product.",
      date: "28 August"
    },
    {
      id: 2,
      name: "David Thompson", 
      location: "BN18",
      rating: 5,
      service: "Interior Doors Installation",
      review: "I'm very pleased with the finished doors Joe installed. The finished look and movement is very good indeed. He was polite and always willing to listen. I would recommend JPW to others.",
      date: "21 August"
    },
    {
      id: 3,
      name: "Emma Wilson",
      location: "PO20", 
      rating: 5,
      service: "Wall Panelling",
      review: "Joe communicated very well and was able to bring my vision to life! He was quick and I will definitely use him again! The quality of workmanship exceeded my expectations.",
      date: "17 June"
    },
    {
      id: 4,
      name: "Michael Chen",
      location: "PO2",
      rating: 5,
      service: "Door Installation",
      review: "Arrived on time, good job done, cleared up mess, good price. Professional service from start to finish. Highly recommend for any carpentry work.",
      date: "16 June"
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      location: "PO21",
      rating: 5,
      service: "Loft Insulation",
      review: "Joe came and finished the job of laying insulation perfectly. He took care to leave eaves clear and run wiring properly. Very helpful all around, even hoovered the stairs afterwards!",
      date: "03 May"
    },
    {
      id: 6,
      name: "James Parker",
      location: "BN17",
      rating: 5,
      service: "Home Extension", 
      review: "Outstanding work on our home extension. Professional, reliable, and the attention to detail was exceptional. Would highly recommend JPW Carpentry & Building.",
      date: "15 April"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-golden text-golden' : 'text-border'}`} 
      />
    ));
  };

  const TestimonialCard = ({ testimonial, className = "" }: { testimonial: typeof testimonials[0], className?: string }) => (
    <Card className={`bg-light-gray border-border shadow-lg ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {renderStars(testimonial.rating)}
        </div>
        <p className="text-medium-gray mb-4 leading-relaxed">
          "{testimonial.review}"
        </p>
        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-primary">{testimonial.name}</h4>
              <p className="text-sm text-medium-gray">{testimonial.service}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-medium-gray">{testimonial.location}</p>
              <p className="text-xs text-medium-gray">{testimonial.date}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="w-full py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-background">2</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="w-20 h-1 bg-golden mx-auto mt-4"></div>
        </div>

        {/* Animated Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px] relative">
          {/* Left Column - Scrolling Down */}
          <div className="space-y-6 animate-[slide-down_20s_linear_infinite]">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={`left-${testimonial.id}`} testimonial={testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={`left-dup-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Center Column - Scrolling Up */}
          <div className="space-y-6 animate-[slide-up_20s_linear_infinite]">
            {testimonials.slice(2, 4).map((testimonial) => (
              <TestimonialCard key={`center-${testimonial.id}`} testimonial={testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(2, 4).map((testimonial) => (
              <TestimonialCard key={`center-dup-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Right Column - Scrolling Down */}
          <div className="space-y-6 animate-[slide-down_20s_linear_infinite]">
            {testimonials.slice(4, 6).map((testimonial) => (
              <TestimonialCard key={`right-${testimonial.id}`} testimonial={testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(4, 6).map((testimonial) => (
              <TestimonialCard key={`right-dup-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default TestimonialsSection;