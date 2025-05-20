import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type ButtonVariant = "primary" | "danger" | "outline";

interface AlertDialogProps {
  open: boolean; // dialog 열림/닫힘 상태
  onOpenChange: (open: boolean) => void; //dialog 상태를 제어하는 핸들러
  title: string;
  description: string;
  icon?: React.ReactNode; // optional icon
  confirmLabel?: string; //확인 버튼 텍스트
  cancelLabel?: string; //취소 버튼 텍스트
  onConfirm: () => void; //확인 버튼 클릭 시 실행될 함수
  showCancel?: boolean; //true면 취소 버튼 보임, false면 숨김 (기본값: true)
  confirmVariant?: ButtonVariant;
  cancelVariant?: ButtonVariant;
}

// 버튼 variant에 따른 클래스 반환
const getButtonClass = (variant: ButtonVariant = "primary") => {
  switch (variant) {
    case "primary":
      return "bg-[#4C4528] hover:bg-[#7a6838] text-white";
    case "danger":
      return "bg-red-700 text-white hover:bg-red-800";
    case "outline":
      return "border border-gray-400 text-gray-800 hover:bg-gray-100";
    default:
      return "";
  }
};

const AlertDialogComponent = ({
  open,
  onOpenChange,
  title,
  description,
  icon,
  confirmLabel = "continue",
  cancelLabel = "cancel",
  onConfirm,
  showCancel = true,
  confirmVariant = "primary",
  cancelVariant = "outline",
}: AlertDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="w-auto sm:w-[400px]">
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            {icon}
            <AlertDialogTitle className="text-lg font-semibold">{title}</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {showCancel && (
            <AlertDialogCancel className={getButtonClass(cancelVariant)}>
              {cancelLabel}
            </AlertDialogCancel>
          )}
          <AlertDialogAction className={getButtonClass(confirmVariant)} onClick={onConfirm}>
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
