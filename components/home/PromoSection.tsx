import React from 'react';
import Image from 'next/image';
import { ProgressCard } from './ProgressCard';
import { StudentsCard } from './StudentsCard';
import { RevenueCard } from './RevenueCard';
import { DiscoverCourseCard, CourseData } from './DiscoverCourseCard';
import { CountUp } from "./CountUp";

const mockCourse: CourseData = {
  id: 99,
  title: "Learn Figma from Basic",
  author: "purepearl studio",
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  price: 25,
  students: 26,
  image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
  category: "UI/UX Design"
};

export function PromoSection() {
  return (
    <section className="w-full relative bg-white pt-12 pb-20 md:pt-24 md:pb-32 lg:pb-40 overflow-hidden">
      {/* Blurred Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Lime Glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-lime-300/20 rounded-full blur-[120px]"></div>
        {/* Middle Left Blue Glow */}
        <div className="absolute top-[40%] -left-[5%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]"></div>
        {/* Bottom Left Lime Glow */}
        <div className="absolute -bottom-[10%] left-[5%] w-[40%] h-[40%] bg-lime-300/20 rounded-full blur-[120px]"></div>
        {/* Bottom Right Blue Glow */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="page-layout gap-y-16 lg:gap-y-32 relative z-10">

        {/* Row 1: Boy */}
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-1 md:gap-12 lg:gap-0">
          {/* Text Left */}
          <div className="px-0 flex flex-col justify-center">
            <h2 className="heading-s md:heading-m mb-4 lg:mb-6">
              Your Path to Professional<br className="hidden lg:block" /> Growth Starts Here!
            </h2>
            <p className="body-m text-neutral-900 mb-4 lg:mb-10 max-w-md">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex items-center gap-8 lg:gap-12">
              <div>
                <p className="heading-s text-primary-600 mb-1">
                  <CountUp end={12} suffix="K" />
                </p>
                <p className="body-s text-neutral-500">Students</p>
              </div>
              <div>
                <p className="heading-s text-primary-600 mb-1">
                  <CountUp end={70} suffix="+" />
                </p>
                <p className="body-s text-neutral-500">Courses</p>
              </div>
              <div>
                <p className="heading-s text-primary-600 mb-1">
                  <CountUp end={16} />
                </p>
                <p className="body-s text-neutral-500">Creators</p>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="relative flex justify-center items-center h-[320px] md:h-[400px] lg:h-[600px] mt-4 lg:mt-0">
            <Image
              src="/images/hero/boy-3d-ornaments.png"
              alt="Ornament"
              width={200}
              height={200}
              className="absolute top-16 lg:top-32 right-4 lg:right-0 z-50 animate-[bounce_4s_ease-in-out_infinite] w-[120px] lg:w-[160px]"
            />
            <Image
              src="/images/hero/boy-img.png"
              alt="Student with laptop"
              width={1200}
              height={1200}
              className="relative z-10 w-full max-w-[550px] xl:max-w-[600px] object-contain drop-shadow-2xl"
            />
            {/* DiscoverCourseCard Absolute */}
            <div className="absolute top-10 -left-2 lg:-left-0 z-0 block scale-[0.5] md:scale-[0.6] lg:scale-[0.7] xl:scale-[0.9] origin-top-left pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
              <div className="w-[340px]">
                <DiscoverCourseCard course={mockCourse} />
              </div>
            </div>
            {/* ProgressCard Absolute */}
            <div className="absolute bottom-[15%] lg:bottom-[37%] right-2 lg:-right-2 z-20 block pointer-events-none scale-[0.6] md:scale-90 lg:scale-[0.9] drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
              <ProgressCard />
            </div>
          </div>
        </div>

        {/* Row 2: Girl */}
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 md:gap-12 lg:gap-0">
          {/* Image Left */}
          <div className="order-2 lg:order-1 relative flex justify-center items-center h-[320px] md:h-[350px] lg:h-[500px]">
            <Image
              src="/images/hero/girl-3d-ornaments.png"
              alt="Ornament"
              width={220}
              height={220}
              className="absolute top-[20%] right-4 lg:right-16 z-30 animate-[bounce_4s_ease-in-out_infinite] w-[160px] lg:w-[200px]"
            />
            <Image
              src="/images/hero/girl-img.png"
              alt="Instructor with tablet"
              width={600}
              height={600}
              className="relative z-10 w-[90%] max-w-[450px] object-contain drop-shadow-2xl lg:-translate-x-10"
            />
            {/* RevenueCard Absolute */}
            <div className="absolute -top-4 left-0 z-0 block pointer-events-none scale-[0.65] md:scale-90 lg:scale-100 origin-top-left">
              <RevenueCard />
            </div>
            {/* StudentsCard Absolute */}
            <div className="absolute bottom-0 -right-2 lg:right-2 z-20 block pointer-events-none scale-[0.65] md:scale-90 lg:scale-100 origin-bottom-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
              <StudentsCard />
            </div>
          </div>

          {/* Text Right */}
          <div className="order-1 lg:order-2 px-0 flex flex-col justify-center lg:pl-10 xl:pl-16">
            <h2 className="heading-s md:heading-m mb-4 lg:mb-6">
              Create & Manage<br className="hidden lg:block" /> Courses Easily.
            </h2>
            <p className="body-m text-neutral-900 mb-8">
              <span className="font-bold text-neutral-900">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="body-m text-neutral-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
