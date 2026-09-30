export interface CourseData {
  id: number;
  title: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  price: number;
  students: number;
  image: string;
  category: string;
}

export function DiscoverCourseCard({ course }: { course: CourseData }) {
  return (
    <div className="w-full bg-white rounded-3xl p-4 border border-neutral-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full h-[200px] rounded-2xl bg-neutral-100 overflow-hidden mb-4">
        {course.image ? (
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300" />
        )}

        {/* Overlay Pills */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          <span className="bg-white/60 backdrop-blur-md text-neutral-800 text-[10px] font-semibold px-2.5 py-1 rounded-full">
            {course.lessons} Lessons
          </span>
          <span className="bg-white/60 backdrop-blur-md text-neutral-800 text-[10px] font-semibold px-2.5 py-1 rounded-full">
            {course.duration}
          </span>
          <span className="bg-white/60 backdrop-blur-md text-neutral-800 text-[10px] font-semibold px-2.5 py-1 rounded-full">
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-bold text-neutral-900 leading-tight line-clamp-1">{course.title}</h3>
        <div className="flex items-center gap-1 shrink-0 ml-2">
          <span className="text-sm font-semibold text-neutral-500">{course.rating}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      <p className="text-xs text-blue-500 mb-4 font-medium">by {course.author}</p>

      {/* Level and Avatars */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 border border-neutral-200 px-3 py-1.5 rounded-full">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500">
            <rect x="18" y="3" width="4" height="18"></rect>
            <rect x="10" y="8" width="4" height="13"></rect>
            <rect x="2" y="13" width="4" height="8"></rect>
          </svg>
          <span className="text-[11px] font-semibold text-neutral-600">{course.level}</span>
        </div>

        <div className="flex items-center">
          <img src={`https://i.pravatar.cc/100?img=${course.id + 10}`} alt="Student" className="w-7 h-7 rounded-full border-2 border-white bg-neutral-300 object-cover relative z-10" />
          <img src={`https://i.pravatar.cc/100?img=${course.id + 11}`} alt="Student" className="w-7 h-7 rounded-full border-2 border-white bg-neutral-400 object-cover relative -ml-2 z-20" />
          <img src={`https://i.pravatar.cc/100?img=${course.id + 12}`} alt="Student" className="w-7 h-7 rounded-full border-2 border-white bg-neutral-500 object-cover relative -ml-2 z-30" />
          <div className="w-7 h-7 rounded-full border-2 border-white bg-[#CCFF00] relative -ml-2 z-40 flex items-center justify-center shrink-0">
            <span className="text-[9px] font-bold text-neutral-900">{course.students}+</span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-end">
        <span className="text-blue-600 font-bold text-xl">${course.price}</span>
        <span className="text-neutral-400 text-[11px] font-medium mb-1 ml-0.5">/lifetime</span>
      </div>
    </div>
  );
}
