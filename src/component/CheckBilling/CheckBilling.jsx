import React from "react";

const CheckBilling = () => {
  return (
    <div className="flex flex-col gap-4">
      {" "}
      <h1 className="text-4xl dark:text-white font-serif font-normal">
        Checkout
      </h1>
      <p className="text-xl dark:text-slate-200 font-medium">Billing address</p>
      <div className="flex items-center justify-between w-full md:w-60">
        <label className="dark:text-slate-300">Country</label>
        <span className="dark:text-slate-300">Required</span>
      </div>
      <div className="w-full md:w-60">
        <select className="w-full dark:text-white bg-transparent p-3 border outline-none dark:border-slate-400 cursor-pointer">
          <option value="United State" className="dark:bg-slate-900">
            United State
          </option>
          <option className="dark:bg-slate-900">
            Somalia
          </option>
          <option value="Kenya" className="dark:bg-slate-900">
            Kenya
          </option>
          <option value="Jabuuti" className="dark:bg-slate-900">
            Jabuuti
          </option>
          <option value="Ethiopia" className="dark:bg-slate-900">
            Ethiopia
          </option>
          <option value="USA" className="dark:bg-slate-900">
            USA
          </option>
          <option value="UK" className="dark:bg-slate-900">
            UK
          </option>
        </select>
      </div>
    </div>
  );
};

export default CheckBilling;
