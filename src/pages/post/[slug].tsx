import React from "react";
import PrismicDOM from 'prismic-dom';
import * as Prismic from '@prismicio/client';
import styles  from "./styles.module.scss";

import { GetServerSideProps} from "next";

import { PostProps } from "../../modules/postProps";
import { getPrismicClient } from "../../services/prismic";

import { ItemDetalhePost } from "../../components/Home/Components/itemDetalhePost/intemDetalhePostProps";
import { Banners } from "../../modules/banners";

export default function Post({ post, banners}) {
    return(
        <>
            <div className={`${styles.centralizer} ${styles.group_container_banners}` }>
                <ItemDetalhePost post={post} />
                
                <div className={`${styles.wrap_banners}`}>
                    {banners && banners.map(bannerPrincipal => (
                        <img key={bannerPrincipal.principal.url} className={styles.bannerPrincipal} src={bannerPrincipal.principal.url}/>
                    ))}

                    {banners && banners.map(bannerSecundario => (
                        <img key={bannerSecundario.secundario.url} className={styles.bannerSecundario} src={bannerSecundario.secundario.url}/>
                    ))}
                </div>
            </div>
          
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async({ req, params }) => {
     
    const { slug } = params;
    const prismic = getPrismicClient(req);
    const response = await prismic.getByUID('Post', String(slug), {})
   
    const post = {
        slug,
        tags: response.tags,
        title: response.data.title.find(title => title.type === 'heading1')?.text ?? '',
        author: response.data.author.find(author => author.type === 'paragraph')?.text ?? '',
        content: PrismicDOM.RichText.asHtml(response.data.content),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })   
    }

    //banners
    const responseBanners = await prismic.query([
        Prismic.predicates.at('document.type', 'banners_post'),
    ], {
        fetch: ['banners_post.banner_principal', 'banners_post.banner_secundario' ],
        pageSize: 2,
    })

    const banners = responseBanners.results.map(banner => {
        return {
            principal: banner.data.banner_principal,
            secundario: banner.data.banner_secundario 
        }
    })
    /* console.log("banner --->", banners.map(m => (m.principal.url)));
    console.log("banner2 --->", banners.map(m => (m.secundario.url))); */

    return {
        props:{
            post:post,
            banners:banners  
        }
    }
}
