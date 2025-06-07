import Image from "next/image";
import { Quote } from "lucide-react";
import homeData from "@/data/content/beranda.json";

export function TestimonialsSection() {
  const { testimonials } = homeData;

  return (
    <section className="py-16 bg-blue-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-6">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full border-4 border-blue-200"
                  />
                </div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-blue-600 font-medium">
                  {testimonial.role}
                </p>
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-blue-300 mb-3" />
                <blockquote className="text-gray-600 italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
