export function getTimeFromTimeStamp(timestamp) {
  let date = new Date(timestamp);
  let ampm = "AM";
  let hours = date.getHours();

  if (hours > 12) {
    hours -= 12;
    ampm = "PM";
  }

  return (
    hours.toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0") +
    " " +
    ampm
  );
}

export function getDateFromTimeStamp(timestamp) {
  let date = new Date(timestamp);
  return (
    date.getDay().toString().padStart(2, "0") +
    "/" +
    date.getMonth().toString().padStart(2, "0") +
    "/" +
    date.getFullYear()
  );
}
