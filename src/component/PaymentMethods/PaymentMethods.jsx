import React from "react";
import { FaCreditCard, FaLock, FaPaypal } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";

const PaymentMethods = ({
  paypal,
  credit,
  setPaypal,
  setCredit,
  setEVC,
  EVC,
}) => {
  const hanldeEVC = () => {
    setCredit(false);
    setPaypal(false);
    setEVC(true);
  };
  const hanldePaypal = () => {
    setEVC(false);
    setCredit(false);
    setPaypal(true);
  };
  const hanldeCredit = () => {
    setEVC(false);
    setPaypal(false);
    setCredit(true);
  };
  return (
    <div className="flex flex-col gap-3">
      {/* ============================== Info ============================== */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-4xl dark:text-white">Payment method</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm dark:text-slate-300">
            Secured connection
          </span>
          <span className="text-sm dark:text-slate-300">
            <FaLock />
          </span>
        </div>
      </div>
      {/* ============================== Methods ============================== */}
      <div>
        <ul className="border dark:border-slate-500">
          {/* ============================== EVC Plus ============================== */}
          <label htmlFor="EVC" onClick={hanldeEVC}>
            <li className="w-full bg-neutral-100 dark:bg-slate-800 dark:border-slate-500 border flex itemes-center p-3 cursor-pointer gap-3">
              <input
                type="radio"
                id="EVC"
                className="cursor-pointer"
                name="pay"
              />
              <div className="flex gap-2 items-center">
                <span>
                  <GiPayMoney className="dark:text-white" />
                </span>
                <span className="text-lg dark:text-white">EVC Plus</span>
              </div>
            </li>
          </label>
          {EVC && (
            <div className="w-full p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-lg dark:text-white">Enter Number</label>
                <input
                  type="text"
                  placeholder="*712*61xxxxxxx*$# / *789*xxxxxx*$#"
                  className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                />
              </div>
            </div>
          )}
          {/* ============================== Paypal ============================== */}
          <label htmlFor="paypal" onClick={hanldePaypal}>
            <li className="w-full bg-neutral-100 dark:bg-slate-800 dark:border-slate-500 border flex itemes-center p-3 cursor-pointer gap-3">
              <input
                type="radio"
                id="paypal"
                className="cursor-pointer"
                name="pay"
              />
              <div className="flex gap-2 items-center">
                <span>
                  <FaPaypal className="dark:text-white" />
                </span>
                <span className="text-lg dark:text-white">Paypal</span>
              </div>
            </li>
          </label>
          {paypal && (
            <div className="w-full p-4">
              <p className="dark:text-slate-200">
                In order to complete your transaction, we will transfer you over
                to PayPal's secure servers.
              </p>
            </div>
          )}
          {/* ============================== Credit ============================== */}
          <label htmlFor="credit" onClick={hanldeCredit}>
            <li className="w-full bg-neutral-100 dark:bg-slate-800 dark:border-slate-500 border flex itemes-center p-3 cursor-pointer gap-3">
              <input
                type="radio"
                className="cursor-pointer"
                name="pay"
                id="credit"
              />
              <div className="flex gap-2 items-center">
                <span>
                  <FaCreditCard className="dark:text-white" />
                </span>
                <span className="text-lg dark:text-white">Credit Card</span>
              </div>
            </li>
          </label>
          {credit && (
            <div className="w-full p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-lg dark:text-white">Name on card</label>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg dark:text-white">Card number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                />
              </div>
              <div className="flex flex-wrap justify-between gap-y-3">
                <div className="w-full md:w-[48%] flex flex-col gap-2">
                  <label className="text-lg dark:text-white">CVC/CVV</label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                  />
                </div>
                <div className="w-full md:w-[48%] flex flex-col gap-2">
                  <label className="text-lg dark:text-white">Expire date</label>
                  <input
                    type="date"
                    placeholder="MM/YY"
                    className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                  />
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PaymentMethods;
