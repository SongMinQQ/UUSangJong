export interface postItem {
  post_id: number;
  user_id: number;
  title: string;
  content: string;
  start_price: number;
  instant_price: number;
  end_date: string;
  is_sold: string;
  created_at: string;
  updated_at: string;
  delivery: string;
  now_price: number;
  images: Array<string>;
}