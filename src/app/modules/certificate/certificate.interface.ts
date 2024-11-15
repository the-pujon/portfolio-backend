export interface Certificate {
  id: number;
  title: string;
  issuedBy: string;
  date: string;
  image: string;
  credentialLink?: string;
  category: string;
  description: string;
  skills: string[];
}
