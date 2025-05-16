import type { AxiosError } from "axios";

export const handleApi = async <T>(fn: () => Promise<T>) => {
  try {
    const data = await fn();
    return { data, error: null };
  } catch (error: unknown) {
    let msg = "오류가 발생했습니다.";

    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const responseMessage = axiosError.response?.data;

      // 문자열이면 그대로, 객체면 message 속성 사용
      if (typeof responseMessage === "string") {
        msg = responseMessage;
      } else if (typeof responseMessage === "object" && responseMessage !== null) {
        msg = (responseMessage as any).message || msg;
      }
    } else if (error instanceof Error) {
      msg = error.message;
    }

    return { data: null, error: msg };
  }
};

function isAxiosError(error: any): error is AxiosError {
  return !!(error.isAxiosError);
}