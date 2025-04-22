"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

export default function SupportContactForm() {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("data"));
  return (
    <div className="bg-black-800 w-full lg:w-2/3 p-6 border border-black-400 rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-5 lg:gap-10 2xl:gap-12 flex-wrap w-full"
      >
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-[calc(50%-20px)]  flex flex-col gap-2">
            <label className="label">First Name </label>
            <input
              {...register("firstName", {
                required: true,
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Geçerli bir isim girin",
                },
              })}
              className="input"
              placeholder="Enter First Name"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <label className="label">Last Name</label>
            <input
              {...register("lastName", {
                required: true,
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Geçerli bir isim girin",
                },
              })}
              className="input"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-[calc(50%-20px)]  flex flex-col gap-2">
            <label className="label">Email</label>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="Enter your email"
              className="input"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <label className="label">Phone Number</label>
            <input
              {...register("phoneNumber", {
                required: true,
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Geçerli bir numara girin",
                },
              })}
              placeholder="Enter Phone Number"
              type="tel"
              className="input"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-5">
          <label className="label">Message</label>
          <textarea
            {...register("message", {
              required: "Mesaj gerekli",
              minLength: {
                value: 10,
                message: "En az 10 karakter girin",
              },
              maxLength: { value: 500, message: "En fazla 500 karakter" },
            })}
            className="input overflow-auto"
            placeholder="Enter your message"
            rows="8"
          />
        </div>

        <Button title="Send Message" type="submit" />
      </form>
    </div>
  );
}
