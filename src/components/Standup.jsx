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
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <p className="mb-16 text-lg text-gray-600">
        Week of <span className="font-bold">{weekDates}</span>
      </p>
      <div>
        <p className="mb-8 font-semibold text-5xl">
          This week's standup leader is
        </p>
        <p className="font-bold text-9xl text-red-600">{standupLeader}</p>
      </div>
    </div>
  );
}
