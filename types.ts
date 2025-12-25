import { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  reviewText: string;
  rating: number;
  productImage: string;
}

export interface KOLImage {
  id: string;
  imageUrl: string;
  creatorName: string;
  platform: string;
}
