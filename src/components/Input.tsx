import { useStore } from "@tanstack/react-form";
import clsx from "clsx";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { useFieldContext } from "@/hooks/useFormContext";
import { ErrorSvg } from "./ErrorSvg";

type InputType = "text" | "password" | "email";

interface InputFieldProps {
  label: string;
  type: InputType;
  placeholder?: string;
}

export const Input = ({ label, type, placeholder = "" }: InputFieldProps) => {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);
  const { t } = useTranslation();
  const inputId = useId();

  const isValid = field.state.meta.isValid;
  const isTouched = field.state.meta.isTouched;
  const showError = !isValid && isTouched && errors.length > 0;

  return (
    <div className="form-control w-full group">
      <label className="label pb-1.5" htmlFor={inputId}>
        <span className="label-text font-semibold text-base-content/70 ml-1 transition-colors group-focus-within:text-primary">
          {label}
        </span>
      </label>

      <div className="relative">
        <input
          autoComplete="off"
          className={clsx(
            "input w-full transition-all duration-300 ease-out",
            "bg-base-100 border-2",
            "placeholder:text-base-content/30",
            showError
              ? "input-error text-error bg-error/5 focus:bg-base-100"
              : "border-base-content/20 hover:border-base-content/40 focus:border-primary focus:shadow-[0_0_0_4px_rgba(90,79,207,0.1)]",
            "rounded-xl h-12",
          )}
          id={inputId}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          value={field.state.value}
        />
      </div>

      <div className="min-h-6 pt-1.5 ml-1">
        {showError && (
          <div className="flex flex-col animate-fade-in-down">
            {errors.map((error, idx) => (
              <span
                className="text-xs text-error font-medium flex items-center gap-1.5"
                key={idx}
                role="alert"
              >
                <ErrorSvg />
                {t(error?.message ?? error)}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
