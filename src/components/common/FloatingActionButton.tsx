import { memo, PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { TicketPlusIcon } from "lucide-react";

interface FloatingActionButtonProps {
  onClick: () => void;
}

function FloatingActionButton({
  onClick,
  children,
}: PropsWithChildren<Partial<FloatingActionButtonProps>>) {
  return (
    <Button
      variant="default"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[blueViolet] text-white shadow-lg hover:bg-primary/90 transition-colors"
      onClick={onClick}
    >
      {children ? children : <TicketPlusIcon className="w-6 h-6" />}
    </Button>
  );
}

export default memo(FloatingActionButton);
