export interface BidMessage {
  post_id: number;
  bid_price: number;
  user_id: number;
  created_at: string;
  content: string;
}

export interface Bid {
  bid_id: number;
  post_id: number;
  user_id: number;
  bid_price: number;
  created_at: string;
  content: string;
}