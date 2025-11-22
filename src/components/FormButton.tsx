import clsx from "clsx";
import { useFormContext } from "@/hooks/useFormContext";

type FormButtonType = "submit" | "reset";

interface FormButtonProps {
  label: string;
  type?: FormButtonType;
  className?: string;
}

export const FormButton = ({
  label,
  type = "submit",
  className,
}: FormButtonProps) => {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => {
        const isPrimary = type === "submit";

        return (
          <button
            className={clsx(
              "btn w-full font-bold tracking-wide transition-all duration-200",
              isPrimary ? "btn-primary" : "btn-outline btn-error",
              className,
            )}
            disabled={isSubmitting}
            type={type}
          >
            {isSubmitting && isPrimary ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                <span>Procesando...</span>
              </>
            ) : (
              label
            )}
          </button>
        );
      }}
    </form.Subscribe>
  );
};
