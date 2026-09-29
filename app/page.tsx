export default function Home() {
  return (
    <div className="page-layout py-20 flex-grow items-center">
      <div className="col-span-12 md:col-span-8 flex flex-col gap-6">
        <h1 className="heading-l text-neutral-900">
          We ignite opportunity by setting the world in motion.
        </h1>
        <p className="body-l text-neutral-600 max-w-2xl">
          Byte Space provides the tools and platforms you need to build the next generation of digital experiences. Join us in shaping the future.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="label-l px-8 py-3 bg-primary-500 text-neutral-50 rounded-full hover:bg-primary-600 transition-colors">
            Get Started
          </button>
          <button className="label-l px-8 py-3 border border-neutral-300 text-neutral-800 rounded-full hover:bg-neutral-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
