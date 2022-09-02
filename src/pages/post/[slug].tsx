import React from "react";
import { GetServerSideProps } from "next";

import { PostProps } from "../../modules/postProps";
import { getPrismicClient } from "../../services/prismic";
import PrismicDOM from 'prismic-dom';
import { ItemDetalhePost } from "../../components/Home/Components/itemDetalhePost/intemDetalhePostProps";

export default function Post({ post }: PostProps) {
    return(
        <>
          <ItemDetalhePost post={post} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async({ req, params }) => {
    
    const { slug } = params;

    const prismic = getPrismicClient(req);
    
    const response = await prismic.getByUID('Post', String(slug), {})
   
    const post = {
        slug,
        tags: response.tags[0],
        title: response.data.title.find(title => title.type === 'heading1')?.text ?? '',
        content: PrismicDOM.RichText.asHtml(response.data.content),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })  
       
    }
    return {
        props:{
            post,
        }
    }
}
