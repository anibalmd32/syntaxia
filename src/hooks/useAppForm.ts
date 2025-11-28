import { createFormHook } from "@tanstack/react-form";
import { CardInput } from "@/components/CardInput";
import { FormButton } from "@/components/FormButton";
import { Input } from "@/components/Input";
import { fieldContext, formContext } from "./useFormContext";

export const { useAppForm, withFieldGroup } = createFormHook({
  fieldComponents: {
    Input,
    CardInput,
  },
  formComponents: {
    FormButton,
  },
  fieldContext,
  formContext,
});
