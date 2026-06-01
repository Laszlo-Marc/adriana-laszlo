import { motion, type MotionValue } from "framer-motion";
import { pathD } from "./data";

type TimelinePathProps = {
  pathLength: MotionValue<number>;
  pathOpacity: MotionValue<number>;
};

export default function TimelinePath({
  pathLength,
  pathOpacity,
}: TimelinePathProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 1160"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-105 -translate-x-1/2"
    >
      <path
        d={pathD}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-teal/15"
      />

      <path
        d={pathD}
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="1 26"
        className="text-purple/20"
      />

      <motion.path
        d={pathD}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        style={{
          pathLength,
          opacity: pathOpacity,
        }}
        className="text-teal drop-shadow-[0_0_10px_rgba(129,213,202,0.75)]"
      />
    </svg>
  );
}
