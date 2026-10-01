import Link from 'next/link';

export function CTASection() {
  return (
    <section className="w-full relative flex items-center justify-center bg-primary-800 overflow-hidden py-6 sm:py-0">
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

      {/* Image in normal document flow to dictate section height */}
      <img
        src="/images/CTA/cta.png"
        alt="Unlock Potential Background Ornaments"
        className="relative z-10 w-full h-auto min-h-[450px] md:min-h-[400px] object-cover object-bottom"
      />

      {/* Absolute positioned content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 page-layout">
        <h2 className="heading-s md:heading-m text-white max-w-3xl">
          Unlock Your Potential as a<br className="hidden md:block" /> Creator with ByteSpace
        </h2>
        <p className="body-m text-white/80 max-w-4xl">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/join"
          className="bg-secondary-500 hover:bg-secondary-600 text-neutral-900 font-bold px-8 py-3.5 rounded-full transition-colors inline-flex items-center justify-center label-m shadow-lg shadow-secondary-500/20"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
