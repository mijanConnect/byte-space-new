"use client";

import React, { useState } from 'react';
import { DiscoverCourseCard, CourseData } from './DiscoverCourseCard';

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing",
  "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography",
  "Productivity", "Web Development", "Data Science", "Cooking"
];

const courses: CourseData[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    students: 26,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop",
    category: "Graphic Design"
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    students: 26,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    category: "Data Science"
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    students: 26,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop",
    category: "Productivity"
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    students: 26,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    category: "Freelance & Entrepreneurship"
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    students: 26,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop",
    category: "Freelance & Entrepreneurship"
  }
];

export function DiscoverCourses() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses = courses.filter((course) => {
    if (activeCategory === "Featured") return true; // Show all for Featured
    return course.category === activeCategory;
  });

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="page-layout">
        {/* Header */}
        <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-0">
          <h2 className="text-3xl md:text-[40px] font-bold text-neutral-900 mb-6 leading-tight">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Categories (Pills) */}
        <div className="col-span-12 flex flex-wrap justify-center items-center gap-2.5 mb-6 max-w-[900px] mx-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors ${activeCategory === cat
                ? "bg-[#CCFF00] text-neutral-900"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
            >
              {cat}
            </button>
          ))}
          <button className="px-4 py-1.5 rounded-full text-[13px] font-bold text-blue-600 hover:text-blue-700 transition-colors">
            + More
          </button>
        </div>

        {/* Grid */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <DiscoverCourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-neutral-500 bg-neutral-50 rounded-2xl border border-neutral-200 border-dashed">
              No courses found for <span className="font-semibold text-neutral-900">{activeCategory}</span>. Please try another category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
