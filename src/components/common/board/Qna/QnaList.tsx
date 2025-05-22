import { useUser } from "@/hooks/useUser";
import { useQna } from "@/hooks/useQna";
import QnaItem from "./QnaItem";
import QnaForm from "./QnaForm";
import { Separator } from "@/components/ui/separator";

interface QnaListProps {
  postId: number;
  postOwnerId: number;
}
export default function QnaList({ postId, postOwnerId }: QnaListProps) {
  const { userInfo } = useUser(); // 로그인한 유저 정보
  const userId = userInfo?.user_id;
  const isOwner = userId === postOwnerId; // 로그인한 유저가 게시글 작성자와 같은지 확인하고 답변 권한 부여

  //질문/답변 성공 시 onSuccess로 refetch() 실행 → 리스트 갱신됨
  const { qnas, refetch } = useQna(postId); // 해당 postId에 대한 QnA 목록을 가져오는 커스텀 훅

  return (
    <div className="space-y-4 p-4">
      <QnaForm postId={postId} onSuccess={refetch} isOwner={isOwner} />
      <Separator className="bg-gray-400 my-6" />
      {/* QnA가 없을 때 메시지 출력 */}
      {qnas.length === 0 ? (
        <p className="text-m text-muted-foreground text-center mb-6">등록된 QnA가 없습니다.</p>
      ) : (
        qnas.map((qna) => (
          <QnaItem
            key={qna.qna_id}
            qna={qna}
            isOwner={isOwner}
            postId={postId}
            onSuccess={refetch}
          />
        ))
      )}
    </div>
  );
}
