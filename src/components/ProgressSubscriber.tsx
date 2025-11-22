import { useProgress } from "@bprogress/react";
import { useRouter } from "@tanstack/react-router";
import type React from "react";

interface Props {
  children: React.ReactNode;
}

export const ProgressSubscriber = ({ children }: Props) => {
  const progress = useProgress();
  const router = useRouter();

  router.subscribe("onBeforeLoad", () => progress.start());
  router.subscribe("onLoad", () => progress.stop());

  return <>{children}</>;
};
