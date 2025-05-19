export interface Qna {
  qna_id: number;
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  answer_content?: string;
  answer_created_at?: string;
}
