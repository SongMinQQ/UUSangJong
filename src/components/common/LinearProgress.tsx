import { cn } from "@/lib/utils";
import { Fragment, memo } from "react";
import { motion } from "framer-motion";
import { useProgressing } from "@/store/store";

interface LinearProgressProps {
  className?: string;
  colorClassName?: string;
}

function LinearProgress({ className, colorClassName = "bg-primary" }: LinearProgressProps) {
  const { isLoading } = useProgressing();
  if (isLoading) console.debug("Progressed", isLoading);
  return isLoading ? (
    <div className={cn("relative w-full h-1 overflow-hidden bg-muted rounded", className)}>
      <motion.div
        className={cn("absolute top-0 left-0 h-full w-1/2 rounded", colorClassName)}
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
      />
    </div>
  ) : (
    <Fragment></Fragment>
  );
}

export default memo(LinearProgress);
