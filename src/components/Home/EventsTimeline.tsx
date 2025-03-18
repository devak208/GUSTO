import { Timeline } from "../UI/aceternity/timeline";
import { timeLineData } from "@/data/TimeLineData";

export default function EventsTimeline() {
  return (
    <div className="w-full mb-44">
      <Timeline data={timeLineData} />
    </div>
  );
}
