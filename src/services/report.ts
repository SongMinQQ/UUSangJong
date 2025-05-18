import axios from "@/utils/http-commons";

interface ReportRequest {
  post_id: number;
  reporter_id: number;
  reported_user_id: number;
  content: string;
  // created_at: string;
  status: number;
}

export const createReport = async (reportData: ReportRequest): Promise<any> => {
  console.log("보내는 신고 데이터", reportData);
  const { data } = await axios.post("/reports", reportData);
  return data;
};
