"use client";

import { MotionConfig } from "motion/react";
import { ProjectViewerProvider } from "./ProjectViewer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ProjectViewerProvider>{children}</ProjectViewerProvider>
    </MotionConfig>
  );
}
