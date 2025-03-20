"use client";
import { Committee } from "@/data/Committee";
import { motion } from "framer-motion";

interface CommitteeCardProps {
  committee: Committee;
}

const CommitteeCard = ({ committee }: CommitteeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative p-6 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {committee.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {committee.description}
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Staff Coordinator
            </h4>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium text-gray-900 dark:text-white">
                {committee.staffCoordinator.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {committee.staffCoordinator.role}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Student Coordinators
            </h4>
            <div className="space-y-3">
              {committee.studentCoordinators.map((coordinator, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
                >
                  <p className="font-medium text-gray-900 dark:text-white">
                    {coordinator.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {coordinator.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CommitteeCard;
