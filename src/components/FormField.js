import React from "react";

export default function FormField({
  label,
  name,
  placeholder,
  register,
  error,
  type = "text",
  validation = {},
  isTextArea = false,
  wrapperClass,
}) {
  return (
    <div className={`flex flex-col w-full gap-2 2xl:gap-5 ${wrapperClass}`}>
      <label className="label">{label}</label>
      {isTextArea ? (
        <textarea
          {...register(name, validation)}
          className="input overflow-auto h-[109px] 2xl:h-[163px]"
          placeholder={placeholder}
          aria-label={error ? `${label}, ${error}` : label}
        />
      ) : (
        <input
          {...register(name, validation)}
          type={type}
          className="input"
          placeholder={placeholder}
          aria-label={error ? `${label}, ${error}` : label}
        />
      )}
      <p
        className={`text-red-700 text-sm min-h-[1.25rem] ${
          error ? "block" : "invisible"
        }`}
      >
        {error || " "}
      </p>
    </div>
  );
}
