import { JsonRTE } from '@contentstack/utils';

export interface Entry {
  created_at: string;
  created_by: string;
  locale: string;
  tags?: string[];
  title: string;
  uid: string;
  updated_at: string;
  updated_by: string;
}

export interface Category extends Entry {
  description?: string;
}

export interface Categories {
  entries: Category[];
}

export interface CSImage {
  url: string;
}

export interface Hero extends Entry {
  content: string;
  cta: string;
  cta_type: 'Button' | 'Text';
  image?: CSImage;
  layout: string;
}

export interface Post extends Entry {
  body: JsonRTE;
  categories?: { uid: string }[];
  main_image?: CSImage;
  published_at: string;
  rendered_body?: string;
  summary?: string;
}

export interface Posts {
  entries: Post[];
}
