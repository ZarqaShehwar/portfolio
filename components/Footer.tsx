import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative " id="contact" >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Main section with two columns */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-start  ">
          <h1 className="font-bold text-4xl md:text-5xl  text-white lg:max-w-full text-start  ">
            Ready to <span className="text-purple">collaborate</span> on your
            next project?
          </h1>

          <p className="text-white-200 md:mt-6 my-4 text-start">
            Reach out today and let’s discuss how I can help you achieve your
            goals through modern web solutions.
          </p>

          <a href="mailto:contact@jsmastery.pro">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="flex-1 w-full max-w-md bg-black-200/50 p-6 rounded-2xl backdrop-blur-md border border-black-300 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">
            Send me a message
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-purple transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-purple transition"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="bg-transparent border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-purple transition"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10 ">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          © 2025 Zarqa Shehwar — All Rights Reserved
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
