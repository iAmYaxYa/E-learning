import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const ContactSection = () => {
  return (
    <div className="w-screen px-4 sm:px-10">
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="w-full lg:w-[48%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.30067538451!2d45.31032025981659!3d2.0355470854350175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d584355ad12f43f%3A0xaf42842fe0ed44be!2sSOMTAC!5e0!3m2!1sen!2sso!4v1678525685464!5m2!1sen!2sso"
            className="w-full h-96 lg:h-[320px] dark:invert border border-slate-400"
          ></iframe>
          <div className="mt-5">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-200">
                  <HiLocationMarker className="text-2xl" />
                </div>
                <h1 className="text-xl text-slate-900 dark:text-white">
                  Taleh, North Building of Masjid Abdirashid , <br /> Mogadishu,
                  somalia, 252
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-200">
                  <FaPhone className="text-xl" />
                </div>
                <h1 className="text-xl text-slate-900 dark:text-white">
                  61 0754219 <br />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Mobile
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[48%] flex flex-col gap-3 p-0 lg:p-3">
          <div>
            <input
              type="text"
              placeholder="First Name *"
              className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name *"
              className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Phone *"
              className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Email *"
              className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            />
          </div>
          <div className="">
            <textarea
              placeholder="Message *"
              className="text-lg p-3 h-32 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            ></textarea>
          </div>
          <div className="">
            <button className="text-xl p-3 bg-main text-white dark:bg-sky-500 cursor-pointer w-full sm:w-[80%] outline-0 rounded">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
