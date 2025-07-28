export function getWeekNumber(date = new Date()) {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

export function getCurrentWeekNumber() {
  return getWeekNumber(new Date());
}

export function getStandupLeaderThisWeek(team) {
  const weekNumber = getCurrentWeekNumber();
  return team[weekNumber % team.length];
}

export function getCurrentWeekDates() {
  const weekNumber = getCurrentWeekNumber();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - startDate.getDay() + 1); // Set to Monday
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 4); // Set to Friday
  return { start: startDate, end: endDate };
}

export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formattedWeekDates() {
  const { start, end } = getCurrentWeekDates();
  return `${formatDate(start)} - ${formatDate(end)}`;
}
