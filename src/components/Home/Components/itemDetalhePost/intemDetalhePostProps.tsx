import React from "react";
import Head from "next/head";
import Link from "next/link";

import { ItemDetalhePostProps } from "../../../../modules/itemDetalhePostProps";

import styles from './styles.module.scss'

export const ItemDetalhePost = ( props : ItemDetalhePostProps) => {
    const {post} = props;
    
    return(
        <div>
            <Head>
                {post.title}
            </Head>
            <article className={styles.container}>
                <div className={styles.containerPrimary}>
                    <Link className={styles.teste} href={`/post/${post.slug}`}>
                        <div className={styles.containerTags}>
                            <a className={styles.buttonTags}>
                                <div></div>
                                <p>{post.tags}</p>
                            </a>
                        </div>
                    </Link>
                    
                    
                    <h1>{post.title}</h1>

                    <div className={styles.containerTime}>
                        <time>{post.updatedAt}</time> 
                    </div>

                    <hr/>

                    <div className={styles.iconesRedesSociais}>
                    </div>  
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