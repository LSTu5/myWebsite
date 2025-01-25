"use client"; // If you're using Next.js, otherwise you can remove this
import React from "react";
import { TypeAnimation } from "react-type-animation";
import pfp from '../imgs/pfp.png'; // Adjust the path as necessary

const HeaderAnimation = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="row-span-5 col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>hi, i&apos;m luke</span>
            <br />
            <span>
              <TypeAnimation
                sequence={[
                  "i code",
                  2500,
                  "i like meeting new people",
                  2500,
                  "i like meeting new people",
                  2500,
                  "i love building cool stuff",
                  2500,
                  "i'm a big lebron fan",
                  2500,
                  "thanks for checking my webpage out",
                  4000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </span>
          </h1>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <img
              src={pfp} // Using the imported profile picture
              alt="Profile of Luke"
              className="absolute transform rounded-full aspect-square object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderAnimation;
