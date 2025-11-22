import * as v from "valibot";
import { GENERIC_VALIDATION_ERROR_MESSAGES } from "../enums/validationErrorMessages";

export const RequiredSchema = v.pipe(
  v.string(),
  v.nonEmpty(GENERIC_VALIDATION_ERROR_MESSAGES.required),
);
