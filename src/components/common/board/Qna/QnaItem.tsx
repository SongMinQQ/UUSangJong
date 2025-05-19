import { Qna } from "@/types/qna";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import AnswerForm from "./AnswerForm";
import { Separator } from "@/components/ui/separator";

interface QnaItemProps {
  qna: Qna;
  isOwner: boolean; // 현재 로그인한 유저가 글 작성자인지 여부 (판매자 여부)
  postId: number; // QnA가 속한 게시물 ID
  onSuccess: () => void;
}
// QnA 답변 폼 조건부 렌더링
export default function QnaItem({ qna, isOwner, postId, onSuccess }: QnaItemProps) {
  return (
    // <Card className="border border-gray-100 bg-[#fffdf9] shadow-xs rounded-lg">
    <Card className="border-none bg-[#faf8ef] rounded-lg">
      <CardHeader className="flex flex-col gap-1">
        <div className="w-full">
          <div className="text-m font-bold">Q. {qna.title}</div>
          <div className="text-xs text-muted-foreground text-end  text-gray-500">
            {new Date(qna.created_at).toLocaleString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
        <div className="text-sm">{qna.content}</div>
      </CardHeader>

      <Separator className="bg-gray-200" />
      <CardContent className="">
        {qna.answer_content ? (
          <div className="flex items-start gap-1 mb-2">
            {/* A. 고정 접두어 */}
            <span className="font-bold pt-[3px]">A.</span>

            {/* 답변 박스 */}
            <div className="text-sm rounded-md py-1 px-2 bg-[#efede3]/80 font-semibold leading-relaxed">
              {qna.answer_content}
            </div>
          </div>
        ) : (
          <div className="text-xs text-gray-700 text-center font-bold mb-4">답변이 없습니다.</div>
        )}

        {isOwner && (
          <div className="pt-2">
            <AnswerForm qnaId={qna.qna_id} postId={postId} onSuccess={onSuccess} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
