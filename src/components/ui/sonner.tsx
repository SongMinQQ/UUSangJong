// sonner.tsx
import { AlertTriangle, CheckCircle, Info, Loader, XCircle } from "lucide-react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;
// https://github.com/shadcn-ui/ui/issues/2254
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"light" as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CheckCircle className="h-4 w-4 text-green-500" />,
        info: <Info className="h-4 w-4 text-blue-500" />,
        warning: <AlertTriangle className="h-4 w-4 text-amber-500" />,
        error: <XCircle className="h-4 w-4 text-red-500" />,
        loading: <Loader className="h-4 w-4 text-gray-500 animate-spin" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
