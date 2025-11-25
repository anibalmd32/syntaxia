import { useToast } from "@/stores/useToast";

export const Toast = () => {
  const toast = useToast();

  return (
    <div>
      {toast.show && toast.message && (
        <div className="toast toast-bottom toast-end">
          <div className={`alert alert-${toast.variant}`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};
