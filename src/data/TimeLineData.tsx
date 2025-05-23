import { LogOut } from "lucide-react";
import {
  FaMicrophone,
  FaCode,
  FaUtensils,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";

export const timeLineData = [
  {
    title: "9:00 AM",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <FaUsers className="timeline_icon" />
            PARTICIPANTS GATHER
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          Join us as participants gather to mark the beginning of GUSTO '25,
          fostering a spirit of unity and excitement for the day ahead.
        </p>
        <div className="bg-blue-900/70 dark:bg-blue-950/70 p-4 rounded-xl mb-6 text-white">
          <div className="text-center">
            <h3 className="font-bold text-white dark:text-white">
              VENUE: GCEE AUDITORIUM
            </h3>
            <p className="text-sm text-white/90 dark:text-gray-200">
              WEDNESDAY, 23rd APRIL
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "9:30 AM",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <FaMicrophone className="timeline_icon" />
            INAUGURAL CEREMONY
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          The grand inauguration ceremony officially kickstarts GUSTO '25,
          setting the tone for an extraordinary day of innovation and
          collaboration.
        </p>
      </div>
    ),
  },
  {
    title: "11:00 AM",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <FaBottleWater className="timeline_icon" />
            REFRESHMENTS
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          Enjoy a refreshing break with our complimentary snacks to recharge for
          the exciting events ahead.
        </p>
      </div>
    ),
  },
  {
    title: "11:15 AM",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <FaCode className="timeline_icon" />
            TECHNICAL EVENTS (PARALLEL TRACKS)
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          Witness brilliant minds showcase their technical prowess across
          multiple events happening simultaneously.
        </p>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Track 1 */}
          <div className="bg-blue-900/70 dark:bg-blue-950/70 p-5 rounded-xl text-white">
            <h3 className="font-bold text-white dark:text-white mb-3 text-lg border-b border-blue-400/70 dark:border-blue-700/70 pb-2">
              Track 1
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      01
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Paper Presentation
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Present your research findings and innovative solutions to
                  technical challenges.
                </p>
              </div>

              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      02
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Project Exposition
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Showcase your innovative projects and engineering solutions
                  with live demonstrations.
                </p>
              </div>
            </div>
          </div>

          {/* Track 2 */}
          <div className="bg-blue-900/70 dark:bg-blue-950/70 p-5 rounded-xl text-white">
            <h3 className="font-bold text-white dark:text-white mb-3 text-lg border-b border-blue-400/70 dark:border-blue-700/70 pb-2">
              Track 2
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      03
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Code Debugging
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Test your problem-solving skills by identifying and fixing
                  bugs in complex code.
                </p>
              </div>

              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      04
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Blind Coding
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  A challenging coding competition where participants get only
                  one chance to execute their program correctly.
                </p>
              </div>
            </div>
          </div>

          {/* Track 3 */}
          {/* <div className="bg-blue-900/70 dark:bg-blue-950/70 p-5 rounded-xl text-white">
            <h3 className="font-bold text-white dark:text-white mb-3 text-lg border-b border-blue-400/70 dark:border-blue-700/70 pb-2">
              Track 3
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      05
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Technical Quiz
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Put your technical knowledge to the test in this fast-paced
                  quiz competition.
                </p>
              </div>

              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      06
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Hunt Mods
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Navigate through technical challenges in this treasure
                  hunt-style competition.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    ),
  },
  {
    title: "12:30 PM",
    content: (
      <div id="lunch">
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <FaUtensils className="timeline_icon" />
            LUNCH BREAK
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          Take a well-deserved break to refuel and network with our fellow
          participants and students.
        </p>

        {/* Menu Highlights */}
        <div className="bg-blue-900/70 dark:bg-blue-950/70 p-4 rounded-xl mb-6 text-white">
          <h3 className="text-white dark:text-white mb-4">
            Complimentary refreshments and meals will be served with vegetarian
            and non-vegetarian options available
          </h3>

          <h3 className="font-black text-lg text-white dark:text-white mb-2">
            Menu Highlights :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* Vegetarian Options */}
            <div>
              <h4 className="font-bold text-white dark:text-white mb-2">
                Vegetarian
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/90"></div>
                  <span className="text-white dark:text-gray-200">
                    Mushroom Biryani (with sides)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/90"></div>
                  <span className="text-white dark:text-gray-200">Gobi 65</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/90"></div>
                  <span className="text-white dark:text-gray-200">
                    Fresh Sweet
                  </span>
                </div>
              </div>
            </div>

            {/* Non-Vegetarian Options */}
            <div>
              <h4 className="font-bold text-white dark:text-white mb-2">
                Non-Vegetarian
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/90"></div>
                  <span className="text-white dark:text-gray-200">
                    Chicken Biryani (with sides)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/90"></div>
                  <span className="text-white dark:text-gray-200">Egg</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/90"></div>
                  <span className="text-white dark:text-gray-200">
                    Chicken 65
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/90"></div>
                  <span className="text-white dark:text-gray-200">
                    Fresh Sweet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // {
  //   title: "2:00 PM",
  //   content: (
  //     <div>
  //       <div className="flex items-center gap-3 mb-4">
  //         <span className="timeline_heading">
  //           <FaTrophy className="timeline_icon" />
  //           PRIZE DISTRIBUTION
  //         </span>
  //       </div>

  //       <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
  //         The technical and non-technical events conclude with recognition of
  //         outstanding achievements and innovative solutions.
  //       </p>

  //       <div className="bg-blue-900/70 dark:bg-blue-950/70 p-4 rounded-xl mb-6 text-white">
  //         <div className="grid grid-cols-1 gap-3">
  //           <h3 className="font-bold text-white dark:text-white mb-2">
  //             Exciting cash prizes awaits the winners.
  //           </h3>
  //           <h3 className="font-bold text-white dark:text-white">
  //             Participation certificates will also be provided.
  //           </h3>
  //         </div>

  //         {/* <h3 className="font-bold text-white dark:text-white mb-3">
  //           Technical Award Categories
  //         </h3>
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
  //           <div className="flex items-center gap-2">
  //             <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-800/90 flex items-center justify-center">
  //               <span className="text-white text-xs">1st</span>
  //             </div>
  //             <span className="text-sm text-white dark:text-gray-200">
  //               Best Project Exposition
  //             </span>
  //           </div>
  //           <div className="flex items-center gap-2">
  //             <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-800/90 flex items-center justify-center">
  //               <span className="text-white text-xs">1st</span>
  //             </div>
  //             <span className="text-sm text-white dark:text-gray-200">
  //               Best Paper Presentation
  //             </span>
  //           </div>
  //           <div className="flex items-center gap-2">
  //             <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-800/90 flex items-center justify-center">
  //               <span className="text-white text-xs">1st</span>
  //             </div>
  //             <span className="text-sm text-white dark:text-gray-200">
  //               Code Debugging Champion
  //             </span>
  //           </div>
  //           <div className="flex items-center gap-2">
  //             <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-800/90 flex items-center justify-center">
  //               <span className="text-white text-xs">1st</span>
  //             </div>
  //             <span className="text-sm text-white dark:text-gray-200">
  //               Blind Coding Master
  //             </span>
  //           </div>
  //           <div className="flex items-center gap-2">
  //             <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-800/90 flex items-center justify-center">
  //               <span className="text-white text-xs">1st</span>
  //             </div>
  //             <span className="text-sm text-white dark:text-gray-200">
  //               Technical Quiz Winner
  //             </span>
  //           </div>
  //           <div className="flex items-center gap-2">
  //             <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-800/90 flex items-center justify-center">
  //               <span className="text-white text-xs">1st</span>
  //             </div>
  //             <span className="text-sm text-white dark:text-gray-200">
  //               Hunt Mods Champion
  //             </span>
  //           </div>
  //         </div> */}
  //       </div>
  //     </div>
  //   ),
  // },
  {
    title: "2:00 PM",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <FaCode className="timeline_icon" />
            TECHNICAL EVENTS (PARALLEL TRACK)
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          Witness brilliant minds showcase their technical prowess across
          multiple events happening simultaneously.
        </p>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Track 1 */}
          {/* <div className="bg-blue-900/70 dark:bg-blue-950/70 p-5 rounded-xl text-white">
            <h3 className="font-bold text-white dark:text-white mb-3 text-lg border-b border-blue-400/70 dark:border-blue-700/70 pb-2">
              Track 1
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      01
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Paper Presentation
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Present your research findings and innovative solutions to
                  technical challenges.
                </p>
              </div>

              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      02
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Project Exposition
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Showcase your innovative projects and engineering solutions
                  with live demonstrations.
                </p>
              </div>
            </div>
          </div> */}

          {/* Track 2 */}
          {/* <div className="bg-blue-900/70 dark:bg-blue-950/70 p-5 rounded-xl text-white">
            <h3 className="font-bold text-white dark:text-white mb-3 text-lg border-b border-blue-400/70 dark:border-blue-700/70 pb-2">
              Track 2
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      03
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Code Debugging
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Test your problem-solving skills by identifying and fixing
                  bugs in complex code.
                </p>
              </div>

              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      04
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Blind Coding
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  A challenging coding competition where participants get only
                  one chance to execute their program correctly.
                </p>
              </div>
            </div>
          </div> */}

          {/* Track 3 */}
          <div className="bg-blue-900/70 dark:bg-blue-950/70 p-5 rounded-xl text-white">
            <h3 className="font-bold text-white dark:text-white mb-3 text-lg border-b border-blue-400/70 dark:border-blue-700/70 pb-2">
              Track 3
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      05
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Technical Quiz
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Put your technical knowledge to the test in this fast-paced
                  quiz competition.
                </p>
              </div>

              <div className="bg-white/15 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-200/80 dark:bg-blue-800/80 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-200 font-bold">
                      06
                    </span>
                  </div>
                  <h4 className="font-bold text-white dark:text-white">
                    Hunt Mods
                  </h4>
                </div>
                <p className="text-xs text-white/90 dark:text-gray-200 mt-2">
                  Navigate through technical challenges in this treasure
                  hunt-style competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2:50 PM",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <FaBottleWater className="timeline_icon" />
            REFRESHMENTS
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          Enjoy a refreshing break with our complimentary snacks to recharge for
          the exciting events ahead.
        </p>
      </div>
    ),
  },
  {
    title: "3:00 PM",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <FaTrophy className="timeline_icon" />
            CLOSING CEREMONY
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          Join us as we recognize outstanding performances through our prize
          distribution, express gratitude to our partners and speakers, and
          reflect on the highlights of the event.
        </p>

        <div className="bg-blue-900/70 dark:bg-blue-950/70 p-4 rounded-xl mb-6 text-white">
          <div className="text-center">
            <h3 className="font-bold text-white dark:text-white">
              VENUE: GCEE AUDITORIUM
            </h3>
            <p className="text-sm text-white/90 dark:text-gray-200">
              WEDNESDAY, 23rd APRIL
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "5:00 PM",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="timeline_heading">
            <LogOut className="timeline_icon" />
            END OF THE DAY
          </span>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
          As we conclude GUSTO '25, we express our gratitude to all
          participants, and volunteers who made this event a grand success.
        </p>
        <div className="bg-blue-900/70 dark:bg-blue-950/70 p-4 rounded-xl mb-6 text-white">
          <div className="text-center text-xs text-white/90 dark:text-gray-200 italic">
            "Thank you for being part of this incredible journey. We hope to see
            you again at GUSTO '26!"
          </div>
        </div>
      </div>
    ),
  },
];
