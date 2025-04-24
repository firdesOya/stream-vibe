import { featureLabels } from "@/config/featureLabels";
import { planComparison } from "@/config/planComparison";
import { Fanwood_Text } from "next/font/google";
import React from "react";

export default function PlanComparisonTable() {
  return (
    <div className="rounded-xl overflow-hidden border border-black-400 mt-10 lg:mt-14 2xl:mt-20">
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
  );
}
