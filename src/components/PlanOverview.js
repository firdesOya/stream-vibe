import React from "react";
import SectionHead from "./SectionHead";
import PlanComparisonTable from "./PlanComparisonTable";

export default function PlanOverview() {
  return (
    <div className="mt-[120px]">
      <SectionHead
        title="Compare our plans and find the right one for you"
        subtitle="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
      />
      <PlanComparisonTable />
    </div>
  );
}
