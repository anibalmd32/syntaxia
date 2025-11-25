import { create } from "zustand";

type ToastVariant = "success" | "error" | "warning" | "info";
type ShowToastProps = {
  message: string;
  duration?: number;
  variant?: ToastVariant;
};

type Toast = {
  show: boolean;
  message: string;
  variant: ToastVariant;
  showToast: (props: ShowToastProps) => void;
};

export const useToast = create<Toast>((set) => ({
  show: false,
  message: "",
  variant: "info",
  showToast: ({ message, duration = 3000, variant = "info" }) => {
    set({
      show: true,
      message,
      variant,
    });
    setTimeout(
      () =>
        set({
          show: false,
        }),
      duration,
    );
  },
}));
