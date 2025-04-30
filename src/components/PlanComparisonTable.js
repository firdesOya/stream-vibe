"use client";
import { featureLabels } from "@/config/featureLabels";
import { planComparison } from "@/config/planComparison";
import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function PlanComparisonTable() {
  const [activeSection, setActiveSection] = useState(planComparison[1].name);

  return (
    <div className="mt-10 lg:mt-14 2xl:mt-20">
      {/* Mobile */}
      <div className="block lg:hidden">
        <ToggleButton
          options={planComparison.map((plan) => ({
            value: plan.name,
            label: plan.name,
          }))}
          className="bg-black-800"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="grid grid-cols-2 w-full gap-4 text-sm border bg-black-800 border-black-400 mt-5 rounded-md p-6">
          {Object.entries(featureLabels).map(([key, label]) => {
            const selectedPlan = planComparison.find(
              (p) => p.name === activeSection
            );
            return (
              <div key={key} className="flex flex-col items-start w-full">
                <div className="global-text">{label}</div>
                <div>{selectedPlan?.features[key]}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:block rounded-xl overflow-hidden border border-black-400 ">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th>Features</th>
              {planComparison.map((plan) => (
                <th key={plan.name}>{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(featureLabels).map(([key, label]) => (
              <tr key={key}>
                <td>{label}</td>
                {planComparison.map((plan) => (
                  <td key={plan.name + key}>{plan.features[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
