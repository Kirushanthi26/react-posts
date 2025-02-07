import error404 from "@/assets/404.png";
import { useNavigate } from "react-router";
import { Button } from "../../../components/ui/Button";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div>
        <img src={error404} alt="error" />
      </div>
      <span className="text-3xl text-neutral-800 font-mdium mt-10">
        We couldn&apos;t find the content you were looking for
      </span>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back to the Previous Page
      </Button>
    </div>
  );
};
