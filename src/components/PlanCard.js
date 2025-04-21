import React from "react";
import Button from "./Button";

export default function PlanCard({ card, activeSection }) {
  const { title, price, period, description } = card;
  const isMonthly = activeSection === "monthly";
  const displayPrice = isMonthly ? price : (Number(price) * 12).toFixed(2);
  const displayPeriod = isMonthly ? period : "/year";
  return (
    <div className="bg-black-600 flex flex-col gap-7 lg:gap-10 2xl:gap-12 p-6 lg:p-10 2xl:p-12 border border-black-400 rounded-md">
      <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-4">
        <h4 className="title">{title}</h4>
        <p className="global-text">{description}</p>
      </div>
      <div>
        <span className="font-semibold text-2xl lg:text-3xl 2xl:text-[40px]">
          ${displayPrice}
        </span>
        <span className="global-text">{displayPeriod}</span>
      </div>
      <div className="flex gap-4 2xl:gap-5 items-center justify-between">
        <Button
          title="Start Free Trail"
          className="w-1/2 whitespace-nowrap "
          variant="secondary"
        />
        <Button title="Choose Plan" className="w-1/2 whitespace-nowrap " />
      </div>
    </div>
  );
}
