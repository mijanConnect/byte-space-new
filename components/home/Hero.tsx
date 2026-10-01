import Image from "next/image";
import { SearchBar } from "@/components/layout/FooterSearchBar";
import { CourseCard } from "./CourseCard";
import { ProgressCard } from "./ProgressCard";
import { StudentsCard } from "./StudentsCard";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-600 min-h-[450px] md:min-h-[800px] flex flex-col items-center pt-32 lg:pt-40 pb-12 md:pb-0">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundSize: "80px 80px",
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundPosition: "center top"
        }}
      />

      {/* Ornaments - Absolute Positioning */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-30">
        <Image
          src="/images/hero/3d-ornament.png"
          alt="3D Ornaments"
          fill
          sizes="100vw"
          className="object-contain object-bottom"
          priority
        />
      </div>

      <div className="page-layout relative z-20 flex flex-col items-center text-center">
        {/* Text Content */}
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 flex flex-col items-center">
          <h1 className="heading-s md:heading-l text-neutral-50 mb-4 md:mb-8">
            Get Access to Hundreds <br /> Courses Available
          </h1>
          <p className="body-m md:body-l text-neutral-100 mb-8 md:mb-15 max-w-4xl">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-2xl">
            <SearchBar
              placeholder="Course, topic, creator"
              buttonText="Search"
              hasIcon={true}
              variant="hero"
            />
          </div>
        </div>
      </div>

      {/* Hero Graphics */}
      <div className="hidden md:flex relative w-full max-w-[900px] mx-auto justify-center items-end px-4 z-20 h-[500px] md:h-[600px] mt-auto">
        {/* Big Yellow Circle Background */}
        <div
          className="absolute bg-secondary-400 rounded-full -z-10 pointer-events-none"
          style={{
            width: 'min(100vw, 1180px)',
            height: 'min(100vw, 1180px)',
            bottom: '-700px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />

        {/* Floating Cards */}
        <div className="absolute top-[35%] left-[-5%] lg:left-[4%] z-30 transform hover:-translate-y-2 transition-transform duration-300">
          <CourseCard />
        </div>

        <div className="absolute bottom-[15%] left-[-10%] lg:left-[5%] z-30 transform hover:-translate-y-2 transition-transform duration-300">
          <StudentsCard />
        </div>

        <div className="absolute top-[30%] right-[-5%] lg:right-[3%] z-30 transform hover:-translate-y-2 transition-transform duration-300">
          <ProgressCard />
        </div>

        {/* People Image */}
        <div className="relative w-full max-w-[850px] h-full pointer-events-none translate-x-6 md:translate-x-10 lg:translate-x-16">
          <Image
            src="/images/hero/hero-people.png"
            alt="Students and professionals"
            fill
            sizes="(max-width: 768px) 100vw, 850px"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
