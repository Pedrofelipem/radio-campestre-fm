import React from "react";
import Head from "next/head";

import styles from './styles.module.scss'

import { AuthorTime } from "../authorTime/authorTime";
import { Tags } from "../tags/tags";
import { ShareSocialNetworks } from "./shareSocialNetworks/shareSocialNetworks";
import { ItemDetalhePostProps } from "../../../../modules/itemDetalhePostProps";

export const ItemDetalhePost = ( props : ItemDetalhePostProps) => {
    const {post} = props;

    return(
        <div>
            <Head>
               <title>{post.title[0].toUpperCase() + post.title.substr(1)}</title>
            </Head>

            <article className={styles.container}>
                <div className={styles.containerPrimary}>
                    <Tags post={post}/>
                    <h1>{post.title}</h1>
                    <AuthorTime post={post}/>
                    <p className={styles.linha}></p>
                    <ShareSocialNetworks post={post}/>
                </div>
                <div className={styles.containerContent}>
                    <div 
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: post.content}} />
                </div>
            </article>

        </div>
    )
}