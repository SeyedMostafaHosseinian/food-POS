export default function TodayDate() {
  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <span className="text-body-large-regular text-lighter-text">
      {formattedDate}
    </span>
  );
}
