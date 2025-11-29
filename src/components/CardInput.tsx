import clsx from "clsx";
import type { CardInputProps } from "@/definitions/input";
import { INPUT_BASE_ERROR_STYLES } from "@/definitions/stylesConstants/inputBaseStyles";
import { useInput } from "@/hooks/useInput";

export const CardInput = (props: CardInputProps) => {
  const { inputId, showError, field } = useInput();

  return (
    <label
      className={clsx(
        "card card-sm bg-accent/40 cursor-pointer hover:border-primary hover:bg-primary transition-transform duration-100",
        showError && `${INPUT_BASE_ERROR_STYLES} border-error`,
        "shadow-lg shadow-accent/40",
        "has-checked:border-primary has-checked:bg-primary has-checked:shadow-md",
        "active:scale-[0.9]",
      )}
      htmlFor={inputId}
    >
      <span className="hidden">{props.label}</span>
      <div className="card-body">
        <div className="card-title">
          {props.icon} {props.label}
        </div>

        <p>{props.description}</p>

        <div className="card-actions">
          <input
            className={clsx(props.type, "hidden")}
            id={inputId}
            name={props.name}
            onBlur={field.handleBlur}
            onChange={(e) =>
              field.handleChange(e.target.checked ? props.value : "")
            }
            type={props.type}
            value={props.value}
          />
        </div>
      </div>
    </label>
  );
};
