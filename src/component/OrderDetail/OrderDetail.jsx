import React from "react";

const OrderDetail = ({ image, price, cost, name }) => {
  return (
    <div className="flex mt-10 flex-col gap-5">
      <h1 className="text-3xl dark:text-4xl dark:text-white">Order details</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={image} className="w-12 h-12" alt="" />
          <h1 className="text-lg md:text-3xl dark:text-white capitalize">
            {name}
          </h1>
        </div>
        <div className="flex flex-col">
          <span className="dark:text-slate-200">${price}</span>
          <span className="line-through dark:text-slate-200">${cost}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
