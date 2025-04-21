"use client";
import React, { useState } from "react";
import SectionHead from "./SectionHead";
import ToggleButton from "./ToggleButton";
import { plans } from "@/config";
import PlanCard from "./PlanCard";

export default function PlanSection() {
  const [activeSection, setActiveSection] = useState("monthly");
  return (
    <div className="mt-11 lg:mt-28">
      <div className="flex items-start lg:items-center justify-between flex-col lg:flex-row gap-5">
        <SectionHead
          title="Choose the plan that's right for you"
          subtitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />
        <div className="min-w-48">
          <ToggleButton
            options={[
              { label: "Monthly", value: "monthly" },
              { label: "Yearly", value: "yearly" },
            ]}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
      </div>
      <div className="mt-10 lg:mt-14 2xl:mt-20 grid grid-col-1 lg:grid-cols-3 gap-5 w-full">
        {plans.map((card, index) => {
          return <PlanCard key={index} card={card} activeSection={activeSection}/>;
        })}
      </div>
    </div>
  );
}
