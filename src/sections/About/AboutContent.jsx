import myimg from "../../assets/myimg.jpeg";

export default function AboutContent() {
  return (
    <div className="bg-[#F9FAFB] dark:bg-[#111827] mt-[50px] lg:mt-[200px] px-8 lg:px-40 py-10 lg:py-20">
      <h3 className="font-semibold text-teal-500 text-center text-xl">About Me</h3>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
        <div>
          <img src={myimg} alt="" className="w-[100%] lg:w-[50%]" />
        </div>

        <div>

        <p className="text-center lg:text-left text-gray-600 dark:text-gray-200">
          I began my journey as a web developer in 2020, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          thirties, 5 years after starting my web development journey, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        
        <p className="text-center lg:text-left text-gray-600 dark:text-gray-200">
          I began my journey as a web developer in 2015, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          twenties, 7 years after starting my web development journey, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        </div>
      </div>
    </div>
  );
}
