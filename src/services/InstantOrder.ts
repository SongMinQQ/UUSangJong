import axios from "@/utils/http-commons";

interface InstantPurchaseParams {
  postId: number;
  userId: number;
}

export async function requestInstantOrder(data: InstantPurchaseParams) {
  try {
    const response = await axios.patch("/post", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.debug("즉시 구매 성공:", response.data);
    return response.data;
  } catch (error) {
    console.debug("즉시 구매 실패:", error);
    throw error;
  }
}
