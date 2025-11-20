import { createFormHook } from "@tanstack/react-form";

import { fieldContext, formContext } from "./useFormContext";

export const { useAppForm } = createFormHook({
  fieldComponents: {},
  formComponents: {},
  fieldContext,
  formContext,
});
