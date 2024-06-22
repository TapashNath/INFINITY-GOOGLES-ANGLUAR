export interface ApiSendRequest {
  id: string;
  url: string;
  mathod: string;
  data: any;
  loding: boolean;
}

export interface ApiResponse {
  error: boolean;
  data: any;
  message: string;
}
