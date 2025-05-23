import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { answerQna } from "@/services/qnaService";
import { handleApi } from "@/utils/handleApi";
import AlertDialogComponent from "@/components/common/AlertDialog"; // 실제 위치에 맞게 경로 수정 필요
import { AlertTriangle } from "lucide-react";

interface AnswerFormProps {
  qnaId: number;
  postId: number;
  onSuccess: () => void;
}
export default function AnswerForm({ qnaId, postId, onSuccess }: AnswerFormProps) {
  const [content, setContent] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false); // AlertDialog 열림 상태
  const [warnDialogOpen, setWarnDialogOpen] = useState<boolean>(false); // 입력 누락 경고

  // AlertDialog에서 확인 버튼 눌렀을 때 실행
  const handleConfirm = async () => {
    const { data } = await handleApi(() => answerQna(qnaId, postId, content));
    if (data) {
      setContent("");
      onSuccess(); //qnaList를 불러오는 refetch() 실행됨.
    }
    setDialogOpen(false); // 다이얼로그 닫기
  };

  return (
    <div className="space-y-2">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="답변을 입력하세요"
      />

      <div className="flex justify-end">
        <Button
          onClick={() => {
            if (content.trim()) {
              setDialogOpen(true);
            } // 버튼 클릭 시 다이얼로그 열기
            else {
              setWarnDialogOpen(true); // 입력 누락 시 경고 다이얼로그
            }
          }}
          className="cursor-pointer bg-[#353333] hover:bg-[#252323] text-white"
        >
          답변 등록
        </Button>
      </div>

      {/* ✅ 입력 누락 경고 다이얼로그 */}
      <AlertDialogComponent
        open={warnDialogOpen}
        onOpenChange={setWarnDialogOpen}
        title="답변 등록 실패"
        description="답변 내용을 입력해주세요."
        icon={<AlertTriangle className="text-yellow-500" />}
        onConfirm={() => setWarnDialogOpen(false)}
        showCancel={false}
      />

      {/* AlertDialogComponent: 실제 제출 확인용 */}
      <AlertDialogComponent
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="답변 등록"
        description="작성하신 답변을 등록하시겠습니까?"
        onConfirm={handleConfirm}
      />
    </div>
  );
}
