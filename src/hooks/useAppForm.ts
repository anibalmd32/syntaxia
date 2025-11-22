import { createFormHook } from "@tanstack/react-form";
import { FormButton } from "@/components/FormButton";
import { Input } from "@/components/Input";
import { fieldContext, formContext } from "./useFormContext";

export const { useAppForm } = createFormHook({
  fieldComponents: {
    Input,
  },
  formComponents: {
    FormButton,
  },
  fieldContext,
  formContext,
});
