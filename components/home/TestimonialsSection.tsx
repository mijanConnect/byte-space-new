"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "https://i.pravatar.cc/150?img=47",
    quote: "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\""
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "https://i.pravatar.cc/150?img=11",
    quote: "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\""
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "https://i.pravatar.cc/150?img=12",
    quote: "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\""
  },
  {
    name: "Emily R.",
    role: "UX Designer",
    image: "https://i.pravatar.cc/150?img=44",
    quote: "\"The design courses here are top-notch. I love how interactive the lessons are and how the community always provides constructive feedback on projects. Highly recommended for aspiring designers!\""
  },
  {
    name: "Michael T.",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=33",
    quote: "\"ByteSpace allowed me to upskill rapidly in cloud technologies. The hands-on labs and expert-led tutorials are unlike anything else I've experienced. Truly a phenomenal learning environment.\""
  },
  {
    name: "Jessica W.",
    role: "Marketing Specialist",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "\"Creating my first marketing course was a breeze thanks to the intuitive tools. The analytics dashboard helps me understand my audience perfectly, leading to better engagement overall.\""
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full relative pt-12 pb-6 lg:pt-24 lg:pb-10 overflow-hidden bg-white">
      {/* Blurred Background Gradients matching the design */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Center Lime Glow */}
        <div className="absolute top-[-10%] left-[45%] w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-[100px] -translate-x-1/2"></div>
        {/* Bottom Left Blue Glow */}
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-primary-600/15 rounded-full blur-[120px]"></div>
        {/* Top Right Soft Lime Glow */}
        <div className="absolute top-[-5%] right-[-10%] w-[450px] h-[450px] bg-secondary-500/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="page-layout w-full relative z-10">
        {/* Header Section */}
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-6 lg:mb-10">
          <h2 className="heading-s md:heading-m text-neutral-900">
            Discover What Our<br className="hidden lg:block" /> Community Is Saying
          </h2>
          <p className="text-neutral-500 body-s md:body-m">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="col-span-12 relative w-full overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20} // Mobile gap (20px)
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24, // Tablet gap (24px)
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32, // Desktop gap (32px)
              }
            }}
            className="w-full !pb-6 lg:pb-1"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover mb-4 lg:mb-6"
                  />
                  <h4 className="label-m lg:label-l text-neutral-900 mb-1">{testimonial.name}</h4>
                  <p className="text-primary-600 body-xs lg:body-s mb-4 lg:mb-6">{testimonial.role}</p>
                  <p className="text-neutral-500 body-xs lg:body-s h-full">
                    {testimonial.quote}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
