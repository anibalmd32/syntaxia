export enum GENERIC_VALIDATION_ERROR_MESSAGES {
  required_field = "validations.generic.required_field",
  invalid_format = "validations.generic.invalid_format",
  too_short = "validations.generic.too_short",
  too_long = "validations.generic.too_long",
  must_string = "validations.generic.must_string",
  must_number = "validations.generic.must_number",
  required = "validations.generic.required",
}

export enum PASSWORD_VALIDATION_ERROR_MESSAGES {
  min_length = "validations.password.min_length",
  max_length = "validations.password.max_length",
  min_lowercase = "validations.password.min_lowercase",
  min_uppercase = "validations.password.min_uppercase",
  min_numbers = "validations.password.min_numbers",
  min_symbols = "validations.password.min_symbols",
  max_repeating = "validations.password.max_repeating",
  passwords_do_not_match = "validations.password.do_not_match",
}

export enum EMAIL_VALIDATION_ERROR_MESSAGES {
  invalid = "validations.email.invalid",
}

export enum AVATAR_VALIDATION_ERROR_MESSAGES {
  max_size = "validations.avatar.max_size",
  invalid_mime_type = "validations.avatar.invalid_mime_type",
}
