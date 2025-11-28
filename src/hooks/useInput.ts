import { useStore } from "@tanstack/react-form";
import { useId } from "react";
import { useFieldContext } from "@/hooks/useFormContext";

export const useInput = () => {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);
  const inputId = useId();

  const isValid = field.state.meta.isValid;
  const isTouched = field.state.meta.isTouched;
  const showError = !isValid && isTouched && errors.length > 0;

  return {
    inputId,
    showError,
    isValid,
    isTouched,
    errors,
    field,
  };
};
