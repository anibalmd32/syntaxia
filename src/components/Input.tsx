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
    <div className="form-control w-full">
      <label className="label pb-1" htmlFor={inputId}>
        <span className="label-text font-medium text-base-content/80 ml-1">
          {label}
        </span>
      </label>

      <input
        autoComplete="off"
        className={clsx(
          "input input-bordered w-full transition-all duration-200",
          "bg-base-200/50 focus:bg-base-100",
          "placeholder:text-base-content/30",
          showError
            ? "input-error text-error focus:ring-error/20"
            : "focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-base-content/30",
        )}
        id={inputId}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={field.state.value}
      />
      <div className="min-h-6 pt-1 ml-1">
        {showError && (
          <div className="flex flex-col animate-fade-in-down">
            {errors.map((error, idx) => (
              <span
                className="text-xs text-error font-medium flex items-center gap-1"
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
