import React from "react";
import SectionHead from "./SectionHead";
import Button from "./Button";
import { questionsData } from "@/config";
import QuestionItem from "./QuestionItem";

export default function QuestionSection() {
  return (
    <div className="mt-[120px]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 justify-between">
        <SectionHead
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        />
        <div>
          <Button title="Ask a Question" className="min-w-[142px]"/>
        </div>
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 mt-[60px]">
    {
        questionsData.map((item)=>{
          return <QuestionItem key={item.id} data={item}/>
        })
      }
    </div>
    </div>
  );
}
