import Head from "next/head";
import React from "react";
import { Post } from "../../../../modules/post";

export interface ItemDetalhePost{
    post: Post;
}

export const ItemDetalhePost = ( props : ItemDetalhePost) => {
    const {post} = props;
    
    return(
        <div>
            <Head>
                {post.title}
            </Head>
            <main>
                <article>
                    <h1>{post.title}</h1>
                    <div 
                        dangerouslySetInnerHTML={{ __html: post.content}} />
                    <time>{post.updatedAt}</time>
                    <strong>{post.tags}</strong>
                </article>
            </main>
        </div>
    )
}