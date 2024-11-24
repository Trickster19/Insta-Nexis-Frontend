import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useAuth, { useDialog } from "@/store";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { TimerIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Modal() {
  const isDialogopen = useDialog((state) => state.isDialogOpen);
  const setIsDialogOpen = useDialog((state) => state.setIsDialogOpen);
  const [timer, setTimer] = useState(15);
  const setAccessToken = useAuth((state) => state.setAccessToken);

  useEffect(() => {
    if (!isDialogopen) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimerEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount or dialog close
  }, [isDialogopen]);

  const handleTimerEnd = () => {
    setAccessToken(null);
    setIsDialogOpen(false);
  };

  return (
    <AlertDialog open={isDialogopen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="text-xl font-bold">
            Your session is about to expire
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-2 text-gray-600">
            You will be logged out if want you to continue your session click on
            refresh
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4 flex flex-col items-center">
          <TimerIcon className="w-20 h-20 text-orange-500 animate-pulse" />
          <p className="mt-2 text-3xl font-semibold text-gray-800">{timer}s</p>
        </div>

        <AlertDialogFooter
          className="mt-6 flex t gap-4"
          style={{ justifyContent: "center", flexDirection: "column" }}
        >
          <AlertDialogAction
            onClick={handleTimerEnd}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            Retain Session
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
