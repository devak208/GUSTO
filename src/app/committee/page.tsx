import { ShootingStars } from "@/components/UI/aceternity/shooting-stars";
import { StarsBackground } from "@/components/UI/aceternity/stars-background";
import CommitteeCard from "@/components/committee/CommitteeCard";
import { committees } from "@/data/Committee";

export default function CommitteePage() {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black bg-grid-black/[0.2] dark:bg-grid-white/[0.2] flex flex-col items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)]"></div>
      <StarsBackground className="z-0 opacity-20 dark:opacity-60" />
      <ShootingStars className="z-0 fixed inset-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Committee Members
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated team behind Gusto 25. Each committee plays a
            crucial role in making this symposium a success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {committees.map((committee, index) => (
            <CommitteeCard key={index} committee={committee} />
          ))}
        </div>
      </div>
    </div>
  );
}
