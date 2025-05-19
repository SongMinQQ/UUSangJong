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
  confirmButtonClassName?: string; //확인 버튼 클래스명
  cancelButtonClassName?: string; //취소 버튼 클래스명
}

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
  confirmButtonClassName,
  cancelButtonClassName,
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
            <AlertDialogCancel className={cancelButtonClassName}>{cancelLabel}</AlertDialogCancel>
          )}
          <AlertDialogAction className={confirmButtonClassName} onClick={onConfirm}>
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
