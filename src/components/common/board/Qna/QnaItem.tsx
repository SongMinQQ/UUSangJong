import { Qna } from "@/types/qna";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AnswerForm from "./AnswerForm";

interface QnaItemProps {
  qna: Qna;
  isOwner: boolean; // 현재 로그인한 유저가 글 작성자인지 여부 (판매자 여부)
  postId: number; // QnA가 속한 게시물 ID
  onSuccess: () => void;
}
// QnA 답변 폼 조건부 렌더링
export default function QnaItem({ qna, isOwner, postId, onSuccess }: QnaItemProps) {
  return (
    <Card>
      <CardHeader>
        <div className="text-sm font-semibold">{qna.title}</div>
        <div className="text-xs text-muted-foreground">{qna.created_at}</div>
      </CardHeader>

      <CardContent>
        <p className="text-sm mb-2">{qna.content}</p>

        {/* 답변이 이미 존재하는 경우 */}
        {qna.answer_content && (
          <>
            <Separator className="my-2" />
            <div className="text-sm font-bold text-green-700">답변</div>
            <p className="text-sm">{qna.answer_content}</p>
          </>
        )}

        {/* 답변이 없는 경우 */}
        {!qna.answer_content && <p className="text-sm text-red-500">답변이 없습니다.</p>}

        {/* 판매자인 경우 항상 답변 폼을 보여줌 */}
        {isOwner && (
          <>
            <Separator className="my-2" />
            <AnswerForm qnaId={qna.qna_id} postId={postId} onSuccess={onSuccess} />
          </>
        )}
      </CardContent>
    </Card>
  );
}
