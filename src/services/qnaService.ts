import api from "@/utils/http-commons";

// QnA 목록 가져오기
export const getQnas = (postId: number) => {
  return api.get("/qna", { params: { post_id: postId } });
};

// QnA 질문 등록
export const createQna = (postId: number, title: string, content: string) => {
  return api.post("/qna", { post_id: postId, title, content });
};

// QnA 답변 등록
export const answerQna = (qnaId: number, postId: number, content: string) => {
  return api.put("/qna", {
    qna_id: qnaId,
    post_id: postId,
    answer_content: content,
  });
};
