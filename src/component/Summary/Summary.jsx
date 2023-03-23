const Summary = ({ price, cost }) => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <h1 className="text-3xl dark:text-4xl dark:text-white">Summary</h1>
      <div className="flex flex-col gap-2">
        <div className="w-full md:w-[70%] flex items-center justify-between">
          <span className="dark:text-slate-300">Original Price:</span>
          <span className="dark:text-slate-300">${cost}</span>
        </div>
        <div className="w-full md:w-[70%] flex items-center justify-between">
          <span className="dark:text-slate-300">Discounts:</span>
          <span className="dark:text-slate-300">{price - cost}$</span>
        </div>
      </div>
      <div className="w-full md:w-[70%] border-t pt-3 flex items-center justify-between">
        <span className="dark:text-slate-200 text-lg font-medium">Total:</span>
        <span className="dark:text-slate-200 text-lg font-medium">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default Summary;
