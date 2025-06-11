import { useNavigate } from "react-router-dom";
import Button from "../components/base/Button";

export default function NotFound() {
  const navigation = useNavigate();
  return (
    <div className="fixed inset-0 z-[9999] bg-dark-bg-1 text-h1 text-primary flex flex-col gap-y-5 items-center justify-center">
      <span className="text-8xl">404</span>
      <span className="text-2xl">Not Found!</span>
      <Button onClick={() => navigation("/")} className="px-8">
        Back To Home
      </Button>
    </div>
  );
}
