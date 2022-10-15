import React from "react";
import { GetStaticProps } from "next";
import { PostsProps } from "../modules/postsProps";

import { getPrismicClient } from "../services/prismic";
import * as Prismic from '@prismicio/client';

import { ItemPost } from "./../components/Home/Components/itemPost/itemPost";


export default function Home({posts}: PostsProps) {
  return (
    <div>
        <div>
            {posts.map(Post => (
                <ItemPost post={Post} key={Post.slug}/>  
            ))}   
        </div>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
    const prismic = getPrismicClient();
    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'Post'),
    ], {
        fetch: ['Post.title', 'Post.author', 'Post.tags', 'Post.content', 'Post.image'],
        orderings:["document.last_publication_date desc"],
        pageSize: 4,
    })
   
    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            tags: post.tags,
            title: post.data.title.find(title => title.type === 'heading1')?.text ?? '',
            author: post.data.author.find(author => author.type === 'paragraph')?.text ?? '',
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            image: post.data.content.find(content => content.type === 'image')?.url ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
            
        }
        
    })

    return{
        props: {
            posts,
        }
    }
}