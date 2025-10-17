"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F887] py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mr-4">
          <div>
            <h4 className="text-[#0a260a] font-semibold text-xl xl:text-2xl mb-4">
              Learn More
            </h4>
            <div className="space-y-2  text-[#0a260a]">
              <Link href="/"><p className="cursor-pointer hover-underline lg:text-xl">Home</p></Link>
              <p className="cursor-pointer hover-underline lg:text-xl">About Us</p>
            </div>
          </div>

          <div>
            <h4 className="text-[#0a260a] font-semibold text-xl xl:text-2xl mb-4">
              Who We are
            </h4>
            <div className="space-y-2 text-[#0a260a]">
              <p className="cursor-pointer hover-underline lg:text-xl">Our Story</p>
              <p className="cursor-pointer hover-underline lg:text-xl">Our Mission</p>
            </div>
          </div>

          <div>
            <h4 className="text-[#0a260a] font-semibold text-xl xl:text-2xl mb-4">
              Support
            </h4>
            <div className="space-y-2 text-[#0a260a]">
              <p className="cursor-pointer hover-underline lg:text-xl">Contact Us</p>
              <p className="cursor-pointer hover-underline lg:text-xl">FAQ</p>
              <p className="cursor-pointer hover-underline lg:text-xl">Privacy Policy</p>
              <p className="cursor-pointer hover-underline lg:text-xl">
                Terms and Conditions
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0a260a] text-4xl font-semibold md:mr-8">
              Anurassaa
            </h2>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hover-underline {
          
          color: #0a260a;
          position: relative;
          display: block;
        }
        .hover-underline::after,
        .hover-underline::before {
          content: '';
          position: absolute;
          width: 50%;
          height: 2px;
          background: linear-gradient(to right, #ff0000, #00ffff);
          bottom: -5px;
          left: 0;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease-out;
        }
        .hover-underline::before {
          top: -5px;
          transform-origin: left;
        }
        .hover-underline:hover::after,
        .hover-underline:hover::before {
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  );
}