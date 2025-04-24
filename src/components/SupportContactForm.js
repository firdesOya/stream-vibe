"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import FormField from "./FormField";

export default function SupportContactForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(watch("data"));
  return (
    <div className="bg-black-800 w-full lg:w-2/3 p-6 border border-black-400 rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-5 2xl:gap-7  flex-wrap w-full"
      >
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <FormField
            label="First Name"
            name="firstName"
            register={register}
            error={errors.firstName?.message}
            placeholder="Enter First Name"
            wrapperClass="lg:w-[calc(50%-20px)]"
            validation={{
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters are allowed",
              },
            }}
          />
          <FormField
            label="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName?.message}
            placeholder="Enter Last Name"
            wrapperClass="lg:w-[calc(50%-20px)]"
            validation={{
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters are allowed",
              },
            }}
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <FormField
            label="Email"
            name="email"
            register={register}
            error={errors.email?.message}
            placeholder="Enter your email"
            wrapperClass="lg:w-[calc(50%-20px)]"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]{2,}$/,
                message: "Enter a valid email address",
              },
            }}
          />
          <FormField
            label="Phone Number"
            name="phoneNumber"
            register={register}
            type="tel"
            error={errors.phoneNumber?.message}
            placeholder="Enter Phone Number"
            wrapperClass="lg:w-[calc(50%-20px)]"
            validation={{
              required: "Phone number is required",
              pattern: {
                value: /^\+?[0-9]{10,15}$/,
                message: "Please enter a valid number",
              },
            }}
          />
        </div>
        <FormField
          label="Message"
          name="message"
          register={register}
          error={errors.message?.message}
          placeholder="Enter your message"
          isTextArea={true}
          validation={{
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Enter at least 10 characters",
            },
            maxLength: { value: 500, message: "Maximum 500 characters" },
          }}
        />
        <div className="flex flex-col gap-5 lg:flex-row items-start lg:items-center justify-between w-full">
          <div className="flex gap-2 2xl:gap-5 items-center cursor-pointer">
            <input
              type="checkbox"
              {...register("checkbox", {
                required: true,
              })}
              aria-invalid={errors.checkbox ? "true" : "false"}
              aria-describedby="checkbox-error"
              className={`appearance-none w-6 h-6 2xl:w-7 2xl:h-7 rounded-md border border-black-400 ${
                errors.checkbox ? "border-red-700" : "bg-black-800"
              } checked:bg-transparent checked:border-black-400 peer`}
            />
            <svg
              className="w-5 h-5 text-red-700 pointer-events-none absolute ml-1 mt-1 invisible peer-checked:visible"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span id="checkbox-error" className="sr-only">
              You must agree to continue
            </span>
            <span className="global-text">
              I agree with Terms of Use and Privacy Policy
            </span>
          </div>
          <Button
            title="Send Message"
            type="submit"
            className="w-full lg:w-auto px-2 xl:px-5"
          />
        </div>
      </form>
    </div>
  );
}
