import React from "react";

const Section = ({ image, button, fTitle, sTitle, p, w }) => {
  return (
    <div className={`w-screen ${p} px-4 sm:px-10`}>
      <div className="flex justify-between items-center flex-wrap gap-8">
        <div className="w-full md:w-[50%] flex items-center justify-center">
          <img src={image} className={`w-[${w}]`} />
        </div>
        <div className="w-full md:w-[45%]">
          <h1 className="text-4xl text-center md:text-left dark:text-white">
            <span className="text-main dark:text-sky-500 font-medium">
              {fTitle} <span></span>
            </span>
            {sTitle}
          </h1>
          <p className="my-5 w-full text-lg font-base dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur iusto, nihil error dolorem est qui tempore. Soluta totam
            perferendis, aut ipsam quas vero iste aliquid, itaque, odio beatae
            eaque laborum delectus. Aliquam omnis quo, reprehenderit, earum
            nostrum illo ipsum quos id fugit tempore voluptatum, numquam eaque
            ea doloremque eum dignissimos!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            veritatis voluptates aliquam delectus alias quas repellat
            voluptatem. Recusandae, repudiandae at!
          </p>
          {button && (
            <button className="shadow-md bg-main px-4 p-3 text-xl rounded-xl cursor-pointer dark:bg-sky-500 text-white">
              Click Here to Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
