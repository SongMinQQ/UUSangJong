import { useUser } from "@/hooks/useUser";
import { useQna } from "@/hooks/useQna";
import QnaItem from "./QnaItem";
import QnaForm from "./QnaForm";

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
    <div className="space-y-4">
      {qnas.map((qna) => (
        <QnaItem key={qna.qna_id} qna={qna} isOwner={isOwner} postId={postId} onSuccess={refetch} />
      ))}
      <QnaForm postId={postId} onSuccess={refetch} />

      {/* QnA 탭을 누르면 사용자 정보를 확인하기 위해 넣어놓음. 나중에 삭제 할 부분. */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-6 p-4 border text-sm text-gray-600 bg-gray-50 rounded-md">
          <div>
            📬 <strong>작성자 ID</strong>: {postOwnerId}
          </div>
          <div>
            🙋 <strong>로그인한 유저 ID</strong>: {userId ?? "불러오지 못함"}
          </div>
          <div>
            👑 <strong>판매자 여부</strong>: {isOwner ? "✅ 본인" : "❌ 타인"}
          </div>
        </div>
      )}
    </div>
  );
}
