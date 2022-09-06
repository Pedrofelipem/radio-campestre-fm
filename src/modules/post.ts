export interface Post {
    slug: string;
    title: string;
    excerpt?: string;
    updatedAt: string;
    image?: string;
    tags?: string;
    author?: string;
    content?: string;
}