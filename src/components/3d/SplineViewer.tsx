import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineViewerProps {
  scene: string;
  className?: string;
}

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-secondary border-t-accent animate-spin" />
        <p className="text-sm text-muted-foreground">Loading 3D model...</p>
      </div>
    </div>
  );
}

export function SplineViewer({ scene, className = "" }: SplineViewerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <Suspense fallback={<SplineLoader />}>
        <Spline scene={scene} />
      </Suspense>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
        Drag to rotate • Scroll to zoom
      </p>
    </motion.div>
  );
}
