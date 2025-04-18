"use client";
import React, { useState } from "react";

export default function QuestionItem({ data }) {
  const { question, id, answer } = data;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex items-center justify-between px-6 py-3 gap-4">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
        <div className="flex items-start">
          <span className="bg-black-500 text-white border border-black-400 font-semibold text-base 2xl:text-xl p-4 xl:p-5 rounded-md">
            0{id}
          </span>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-lg text-white font-medium">{question}</span>
          {!isOpen && <p className="text-sm text-gray-800 mt-2">{answer}</p>}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-6 h-6 ${isOpen ? "self-center " : "self-start mt-2"}`}
      >
        <img
          src={isOpen ? "/icons/icon-plus.svg" : "/icons/icon-minus.svg"}
          alt="icon"
          className="w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] object-cover"
        />
      </button>
    </div>
  );
}
