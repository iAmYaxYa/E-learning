import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CheckBilling,
  CheckOutHeader,
  OrderDetail,
  PaymentMethods,
  ProceedButton,
  Summary,
} from "../../component";
import CheckOutHeaderSkeleton from "../../Skeleton/CheckOutHeaderSkeleton";
import OrderDetailSkeleton from "../../Skeleton/OrderDetailSkeleton";
import ProceedBtnSkeleton from "../../Skeleton/ProceedBtnSkeleton";
import SummarySkeleton from "../../Skeleton/SummarySkeleton";
import useFetch from "../../useFetch";

const url = "https://raw.githubusercontent.com/iAmYaxYa/api/main/config/courses.json";

const CheckOut = () => {
  const [EVC, setEVC] = useState(false);
  const [paypal, setPaypal] = useState(false);
  const [credit, setCredit] = useState(false);
  const { id } = useParams();
  const { Data, isLoading } = useFetch(url);
  const Course = Data.find((course) => course.id == id);
  return (
    <div className="fixed min-h-screen w-full top-0 left-0 bg-white dark:bg-slate-900 z-10">
      {/* ========================== Header ========================== */}

      {isLoading ? (
        <CheckOutHeaderSkeleton />
      ) : (
        <CheckOutHeader title={Course.title} />
      )}

      {/* =========================== Main =========================== */}
      <div className="flex justify-between gap-y-5 w-full flex-wrap pt-28 pb-40 max-h-[800px] overflow-auto">
        <div className="w-full md:w-[50%] px-4 sm:px-10 ">
          <div className=" flex flex-col gap-4">
            <CheckBilling />
            <p className="dark:text-slate-400">
              Udemy is required by law to collect applicable transaction taxes
              for purchases made in certain tax jurisdictions.
            </p>
            <PaymentMethods
              paypal={paypal}
              credit={credit}
              setCredit={setCredit}
              setPaypal={setPaypal}
              EVC={EVC}
              setEVC={setEVC}
            />
            {/* ================== Order details ================== */}
            {isLoading ? (
              <OrderDetailSkeleton />
            ) : (
              <OrderDetail
                name={Course.name}
                price={Course.price}
                cost={Course.cost}
                image={Course.image}
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-[50%] px-4 sm:px-10">
          {/* ====================== Summary ====================== */}

          {isLoading ? (
            <SummarySkeleton />
          ) : (
            <Summary cost={Course.cost} price={Course.price} />
          )}
          {/* ================= Proceed button ================= */}

          {isLoading ? (
            <ProceedBtnSkeleton />
          ) : (
            <ProceedButton total={Course.price} />
          )}
        </div>
        {/* ======================= Footer ======================= */}
        <div className="bg-transparent h-24 md:h-10 w-full"></div>
      </div>
    </div>
  );
};

export default CheckOut;
