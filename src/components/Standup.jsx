import { formattedWeekDates, getStandupLeaderThisWeek } from "../utils";

const teamMembers = [
  "Allen",
  "Brad",
  "Cristian",
  "David",
  "Elise",
  "Heddy",
  "John",
  "Graham",
  "Alyssa",
  "Marc",
  "Michael",
  "Rich",
];

export default function Standup() {
  const weekDates = formattedWeekDates();
  const standupLeader = getStandupLeaderThisWeek(teamMembers);

  return (
    <div className="min-h-screen -mt-16 p-12 flex flex-col justify-center items-center text-center">
      <p className="mb-16 sm:text-lg text-md text-gray-600">
        Week of <span className="font-bold">{weekDates}</span>
      </p>
      <div>
        <p className="mb-8 font-semibold sm:text-5xl text-3xl">
          This week's standup leader is
        </p>
        <p className="font-bold sm:text-9xl text-7xl text-red-600">
          {standupLeader}
        </p>
      </div>
    </div>
  );
}
