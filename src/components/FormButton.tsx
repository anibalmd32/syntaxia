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
              "btn w-full font-bold tracking-wide transition-all duration-300",
              "rounded-xl h-12 border-0",
              isPrimary
                ? "text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98]"
                : "btn-ghost hover:bg-base-200",
              className,
            )}
            disabled={isSubmitting}
            style={
              isPrimary
                ? {
                    background:
                      "linear-gradient(135deg, #00C6FF 0%, #5A4FCF 100%)",
                  }
                : undefined
            }
            type={type}
          >
            {isSubmitting && isPrimary ? (
              <>
                <span className="loading loading-spinner loading-sm text-white"></span>
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
