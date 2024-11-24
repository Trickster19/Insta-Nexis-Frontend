import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useAuth, { useDialog } from "@/store";
import { useEffect, useRef, useState } from "react";
import { TimerIcon } from "lucide-react";
import { useLogin } from "@/hooks/UseLogin";
import { useSessionDetails } from "@/store/store";
import { loginInterface } from "@/utils/Interfaces";

export function Modal() {
  const isDialogopen = useDialog((state) => state.isDialogOpen);
  const setIsDialogOpen = useDialog((state) => state.setIsDialogOpen);
  const [timer, setTimer] = useState(15);
  const setAccessToken = useAuth((state) => state.setAccessToken);

  const getDecodedSessionDetails = useSessionDetails(
    (state) => state.getDecodedSessionDetails
  );
  const mutation = useLogin(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const interval = useRef<any>(null);

  useEffect(() => {
    if (!isDialogopen) return;

    interval.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          if (interval.current !== null) clearInterval(interval.current);
          handleTimerEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval.current);
  }, [isDialogopen]);

  const handleTimerEnd = () => {
    setAccessToken(null);
    setIsDialogOpen(false);
  };

  const handleRefreshSession = () => {
    const details: loginInterface | null = getDecodedSessionDetails();

    if (details) {
      mutation.mutate(details);
    } else {
      handleTimerEnd();
    }
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
            onClick={handleRefreshSession}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            Retain Session
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
