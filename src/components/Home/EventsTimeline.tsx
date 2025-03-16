import { Timeline } from "../UI/aceternity/timeline";
import { timeLineData } from "@/data/TimeLineData";

export default function EventsTimeline() {
  return (
    <div className="w-full">
      <Timeline data={timeLineData} />
    </div>
  );
}
