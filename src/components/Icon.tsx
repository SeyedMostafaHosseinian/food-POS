export default function Icon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <svg className={className ? className : "w-6 h-6"}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}
