import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createQna } from "@/services/qnaService";
import { handleApi } from "@/utils/handleApi";
import AlertDialogComponent from "@/components/common/AlertDialog";
import { AlertTriangle } from "lucide-react";
import { CheckCircle } from "lucide-react"; // 아이콘은 자유롭게

export default function QnaForm({ postId, onSuccess }: { postId: number; onSuccess: () => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [warnDialogOpen, setWarnDialogOpen] = useState(false); // 제목/내용 누락 경고 다이얼로그
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false); // 등록 확인용 다이얼로그

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
    <div className="space-y-2 mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        className="w-full border px-3 py-2 rounded-md text-sm"
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="질문 내용을 입력하세요"
        className="min-h-[100px]"
      />

      <Button onClick={handleClick} className="w-full">
        QnA 등록
      </Button>

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
