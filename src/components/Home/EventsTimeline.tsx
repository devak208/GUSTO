import { Timeline } from "../UI/aceternity/timeline";
import { timeLineData } from "@/data/TimeLineData";

export default function EventsTimeline({ isLast }: { isLast: boolean }) {
  return (
    <div
      id="timeline"
      className={`border rounded-lg border-slate-200 dark:border-neutral-700 w-full ${
        !isLast ? "mb-44" : "mb-20"
      }`}
    >
      <Timeline data={timeLineData} />
    </div>
  );
}
