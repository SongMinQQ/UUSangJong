// hooks/useBidSocket.ts
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client, IMessage } from "@stomp/stompjs";
import { BidMessage } from "@/types/bid";

export function useBidSocket(postId: number) {
  const [bids, setBids] = useState<BidMessage[]>([]);

  useEffect(() => {
    if (!postId) return;

    const socket = new SockJS("https://minq.online/ws", null, { withCredentials: true });

    const client = new Client({
      webSocketFactory: () => socket as WebSocket,
      reconnectDelay: 5000,
      debug: (str) => console.log("[STOMP]", str),
      onConnect: () => {
        console.log("✅ STOMP connected");

        client.subscribe(`/topic/bids/${postId}`, (message: IMessage) => {
          if (message.body) {
            try {
              const bidList: BidMessage[] = JSON.parse(message.body);
              setBids(bidList);
            } catch (err) {
              console.error("❌ Failed to parse bid message", err);
            }
          }
        });

        client.publish({
          destination: "/app/bid/init",
          body: JSON.stringify({ postId }),
        });
      },
      onStompError: (frame) => {
        console.error("[STOMP ERROR]", frame.headers["message"]);
      },
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, [postId]);

  return bids;
}
