"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/navigation";

interface IHero {
  shopRoute: string;
}

function MovingText({
  text,
  direction,
}: {
  text: string;
  direction: "left" | "right";
}) {
  let count = 40;
  return (
    <Marquee direction={direction} pauseOnHover>
      {
        // Using a for loop to generate JSX elements
        // Remember to provide a unique key to each element in the loop
        // This helps React efficiently update the DOM
        (() => {
          const elements = [];
          for (let i = 0; i < count; i++) {
            elements.push(
              <p
                key={i}
                className="uppercase font-thin tracking-widest text-lg mr-5"
              >
                {text}
              </p>,
            );
          }
          return elements;
        })()
      }
    </Marquee>
  );
}

function HeroSection({ shopRoute }: IHero) {
  const router = useRouter();

  const navigate = () => {
    router.push(shopRoute, { scroll: false });
  };

  return (
    <div className="w-full">
      <MovingText text="new drop" direction="right" />
      {/* here will be the hero image */}
      <div className="relative">
        <Image src="/dubai.jpeg" alt="Dubai" width={5000} height={300} />
        <button
          onClick={() => navigate()}
          className="absolute bottom-16 text-lg font-bold right-16 py-3 px-5 bg-red-500 uppercase shadow-2xl shadow-red-500 rounded-full"
        >
          Shop Now
        </button>
      </div>
      <MovingText text="🇲🇽 new cartel series 🇲🇽" direction="left" />
    </div>
  );
}

export default HeroSection;
