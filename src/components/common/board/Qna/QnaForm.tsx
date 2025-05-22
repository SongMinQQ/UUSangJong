import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createQna } from "@/services/qnaService";
import { handleApi } from "@/utils/handleApi";
import AlertDialogComponent from "@/components/common/AlertDialog";
import { AlertTriangle } from "lucide-react";
import { CheckCircle } from "lucide-react"; // 아이콘은 자유롭게

export default function QnaForm({
  postId,
  onSuccess,
  isOwner,
}: {
  postId: number;
  onSuccess: () => void;
  isOwner: boolean;
}) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [warnDialogOpen, setWarnDialogOpen] = useState<boolean>(false); // 제목/내용 누락 경고 다이얼로그
  const [confirmDialogOpen, setConfirmDialogOpen] = useState<boolean>(false); // 등록 확인용 다이얼로그

  const handleRegister = async () => {
    const { data } = await handleApi(() => createQna(postId, title, content));
    if (data) {
      setTitle("");
      setContent("");
      onSuccess(); // refetch 실행
    }
    setConfirmDialogOpen(false); // 등록 다이얼로그 닫기
  };

  const handleClick = () => {
    if (!title || !content) {
      setWarnDialogOpen(true); // 입력 누락 시 경고
    } else {
      setConfirmDialogOpen(true); // 정상일 경우 등록 확인 다이얼로그
    }
  };

  return (
    <div className="space-y-2 rounded-md shadow p-4 bg-[#faf8ef]">
      <h3 className="text-md font-bold text-center">💬 판매자에게 질문을 남겨보세요</h3>
      {!isOwner && (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="궁금한 점의 제목을 입력해주세요(최대 30자)"
            maxLength={30}
            className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-0 focus:border-[#353333]"
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="판매자에게 남기고 싶은 질문 내용을 자세히 입력해주세요(최대 1000자)"
            maxLength={1000}
            className="min-h-[100px]"
          />

          <div className="flex justify-end">
            <Button
              onClick={handleClick}
              className="cursor-pointer bg-[#353333] hover:bg-[#252323] text-white"
            >
              QnA 등록
            </Button>
          </div>
        </div>
      )}

      {/* ❌ 누락 시 경고 다이얼로그 */}
      <AlertDialogComponent
        open={warnDialogOpen}
        onOpenChange={setWarnDialogOpen}
        title="QnA 등록 실패"
        description="제목과 내용을 모두 입력해주세요."
        icon={<AlertTriangle className="text-yellow-500" />}
        onConfirm={() => setWarnDialogOpen(false)}
        showCancel={false}
      />

      {/* ✅ 등록 확인 다이얼로그 */}
      <AlertDialogComponent
        open={confirmDialogOpen}
        onOpenChange={setConfirmDialogOpen}
        title="QnA 등록 확인"
        description="작성하신 QnA를 등록하시겠습니까?"
        icon={<CheckCircle className="text-darkgreen-600" />}
        onConfirm={handleRegister}
        showCancel={true}
      />
    </div>
  );
}
