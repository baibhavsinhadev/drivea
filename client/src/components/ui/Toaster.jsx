import { Toaster } from "sonner";
import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  LoaderCircleIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";

export function ToasterComponent() {
  return (
    <Toaster
      position="top-right"
      theme="light"
      richColors
      closeButton
      visibleToasts={4}
      expand={false}
      gap={10}
      offset={20}
      icons={{
        success: <CheckCircle2Icon className="size-5 text-emerald-600" />,
        error: <XCircleIcon className="size-5 text-red-600" />,
        warning: <AlertTriangleIcon className="size-5 text-amber-600" />,
        info: <InfoIcon className="size-5 text-orange-600" />,
        loading: (
          <LoaderCircleIcon className="size-5 animate-spin text-orange-600" />
        ),
        close: <XIcon className="size-3.5" />,
      }}
    />
  );
}
