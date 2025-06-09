export default function CostSummary() {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex justify-between items-center">
        <span className="text-light-text text-body-normal-regular">
          Discount
        </span>
        <span className="text-white text-body-large-medium">$ 0</span>
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="text-light-text text-body-normal-regular">
          Sub total
        </span>
        <span className="text-white text-body-large-medium">$ 55.5</span>
      </div>
    </div>
  );
}
