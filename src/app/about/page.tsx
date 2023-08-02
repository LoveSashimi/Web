import React from "react";

function About() {
  return (
    <div>
      <title>About </title>

      <div className="bg-gray-800 py-4 text-white sticky top-0 z-50 leading-none font-bold">
        {" "}
        About RateMyGov
      </div>
      <h1 className="text-orange-600 text-9xl font-bold animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        Introduction
      </h1>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        Rate My Government is a groundbreaking web platform designed to empower
        citizens and provide a platform for free speech and open dialogue about
        governmental institutions and policies. With a focus on transparency,
        accountability, and user-driven interactions, Rate My Government aims to
        foster a strong and informed democracy where everyone's voice is heard.
      </div>
      <div className="text-orange-600 text-9xl font-bold animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        <h1>Technological Stack</h1>
      </div>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        Rate My Government is built upon a robust technological stack, utilizing
        cutting-edge tools and frameworks to ensure efficiency, security, and
        seamless user experiences. The key technologies employed in this project
        are Next.js, MySQL, Tailwind CSS, Strapi, Vercel, and TypeScript.
      </div>
      <div className="text-orange-600 text-9xl font-bold hover:text-blue-600 animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        <h1>
          <a href="https://nextjs.org/">Next.js </a>
        </h1>
      </div>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        <img
          src="https://stackdiary.com/wp-content/uploads/2022/11/Next.js-Tutorial-for-Beginners.png "
          alt="..."
          className="object-cover h-96 w-120"
        />
        Next.js serves as the foundation of Rate My Government's frontend
        development. As a powerful React framework, Next.js offers server-side
        rendering (SSR), pre-rendering, and automatic code-splitting, enhancing
        both performance and SEO. Its built-in routing capabilities enable
        smooth navigation and seamless page transitions, ensuring a snappy user
        experience. Additionally, Next.js allows for easy integration with
        TypeScript, enabling a statically-typed codebase that enhances code
        quality and maintainability.
      </div>
      <div className="text-orange-600 text-9xl font-bold hover:text-blue-600 animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        <h1>
          <a href="https://www.mysql.com/">MySQL</a>
        </h1>
      </div>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        <img
          src="https://www.liveagent.com/app/uploads/2020/11/MySQL-Logo.png"
          alt="..."
          className=""
        />
        The heart of Rate My Government's data management lies in MySQL, a
        versatile and robust relational database management system. MySQL stores
        and organizes user-generated content, ratings, and feedback, ensuring
        data integrity and scalability. With efficient querying capabilities,
        MySQL facilitates quick retrieval of information, enabling users to
        access relevant content and insights promptly.{" "}
      </div>
      <div className="text-orange-600 text-9xl font-bold hover:text-blue-600 animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        <h1>
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
        </h1>
      </div>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        <img
          src="https://s3-alpha.figma.com/hub/file/2603959525/8e909c88-4e83-4af4-b5b2-4a50a9b571f7-cover.png"
          alt="..."
          className=""
        />
        Tailwind CSS is the preferred CSS framework for Rate My Government's
        design and styling. Its utility-first approach offers a wide array of
        reusable classes, allowing for fast and consistent UI development.
        Tailwind CSS's focus on customization empowers the design team to create
        a visually striking and high-tech appearance, while keeping the overall
        footprint minimal for optimized performance.{" "}
      </div>
      <div className="text-orange-600 text-9xl font-bold hover:text-blue-600 animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        <h1>
          <a href="https://strapi.io/">Strapi</a>
        </h1>
      </div>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        <img
          src="https://mms.businesswire.com/media/20200520005179/en/792790/22/Logo.WhiteBackground.jpg"
          alt="..."
          className=""
        />
        As the headless CMS (Content Management System) powering Rate My
        Government, Strapi enables seamless content creation and management.
        Strapi's user-friendly interface simplifies the process of updating,
        moderating, and publishing user-generated content, providing a smooth
        content management workflow. The decoupled nature of Strapi enables it
        to serve as a backend to the frontend, maintaining a clear separation of
        concerns and enhancing flexibility.
      </div>
      <div className="text-orange-600 text-9xl font-bold hover:text-blue-600 animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        <h1>
          <a href="https://vercel.com/">Vercel</a>
        </h1>
      </div>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        <img
          src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg"
          alt="..."
          className=""
        />
        Rate My Government is hosted on Vercel, a cloud platform that offers
        scalable and reliable serverless deployments. Vercel's ease of use and
        quick deployment cycles facilitate agile development and continuous
        integration, allowing the team to roll out updates and new features
        efficiently. With Vercel's global content delivery network (CDN), users
        worldwide experience blazing-fast loading times, contributing to a
        positive user experience.
      </div>
      <div className="text-orange-600 text-9xl font-bold hover:text-blue-600 animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        <h1>
          <a href="https://www.typescriptlang.org/">TypeScript</a>
        </h1>
      </div>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        <img
          src="data:image/png;base64,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"
          alt="..."
          className=""
        />
        TypeScript is an integral part of Rate My Government's development
        process, enhancing code quality and maintainability. With its static
        typing, TypeScript catches errors during development, reducing bugs and
        improving code robustness. By providing a comprehensive type system,
        TypeScript enhances code readability, enabling developers to collaborate
        seamlessly and build a reliable and efficient codebase.
      </div>
      <div className="text-orange-600 text-9xl font-bold animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
        <h1>Check me out</h1>
      </div>
      <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-6xl">
        Rate My Government represents a paradigm shift in how citizens interact
        with their governments. Through the innovative combination of Next.js,
        MySQL, Tailwind CSS, Strapi, Vercel, and TypeScript, the platform offers
        an intuitive, secure, and efficient user experience. With a strong
        emphasis on transparency and free speech, Rate My Government empowers
        citizens to voice their opinions freely, promoting a more informed and
        engaged democracy for all.
      </div>
      <a href="search" className="text-white flex-">
        Back to Search
      </a>
    </div>
  );
}

export default About;
