export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[];
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  publish_details: {
    environment: string;
    locale: string;
    time: string;
    user: string;
  };
}

export interface Link {
  title: string;
  href: string;
}

export interface Category {
  /** Title */
  title: string;
  /** Description */
  description?: string;
}

/** Basic blog post */
export interface Post {
  /** Title */
  title: string;
  /** Main image */
  main_image?: File;
  /** Categories */
  categories?: Category[];
  /** Published at */
  published_at: string;
  /** Summary */
  summary?: string;
  /** Body */
  body: any;
  /** Rendered body */
  rendered_body?: string;
  uid: string;
}

export interface Hero {
  /** Heading */
  title: string;
  /** Image */
  image?: File;
  /** Layout */
  layout:
    | 'Top left'
    | 'Top center'
    | 'Top right'
    | 'Center left'
    | 'Center center'
    | 'Center right'
    | 'Bottom left'
    | 'Bottom center'
    | 'Bottom right';
  /** Content */
  content?: string;
  /** CTA */
  cta?: string;
  /** CTA type */
  cta_type?: 'Button' | 'Text';
}
