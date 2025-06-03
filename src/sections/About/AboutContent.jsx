import about from "../../assets/about.png";

export default function AboutContent() {
  return (
    <div className="bg-[#F9FAFB] mt-[200px] px-8 lg:px-40 py-20">
      <h3 className="underline">About Me</h3>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img src={about} alt="" />
        </div>

        <div>

        <p>
          I began my journey as a web developer in 2015, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          thirties, 7 years after starting my web development journey, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        
        <p>
          I began my journey as a web developer in 2015, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          thirties, 7 years after starting my web development journey, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        </div>
      </div>
    </div>
  );
}
