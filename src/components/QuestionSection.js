"use client";
import React, { useState } from "react";
import SectionHead from "./SectionHead";
import Button from "./Button";

import QuestionItem from "./QuestionItem";
import { questionsData } from "@/config/questionData";

export default function QuestionSection() {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const middleIndex = Math.ceil(questionsData.length / 2);
  const leftColumn = questionsData.slice(0, middleIndex);
  const rightColumn = questionsData.slice(middleIndex);

  return (
    <div className="mt-[120px]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 justify-between">
        <SectionHead
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        />
        <div>
          <Button title="Ask a Question" className="min-w-[142px]" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:max-h-[500px] lg:h-[500px] mt-[60px]">
        <div className="flex-1 flex flex-col gap-6">
          {leftColumn.map((item) => (
            <QuestionItem
              key={item.id}
              data={item}
              handleToggle={handleToggle}
              isOpen={openId === item.id}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-6">
          {rightColumn.map((item) => (
            <QuestionItem
              key={item.id}
              data={item}
              handleToggle={handleToggle}
              isOpen={openId === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
