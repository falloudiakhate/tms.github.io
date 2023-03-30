export interface TokenModel {
  id: number;
  name: String;
  content: String
  owner: String;
  description: String;
  created_date: Date
  collections: number[]
  image_url:String
}
