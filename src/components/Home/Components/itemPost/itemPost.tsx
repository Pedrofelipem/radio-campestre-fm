import React from "react";
import Link from "next/link";

import { IntemPostProps } from "../../../../modules/itemPostPros";

import styles from './styles.module.scss';


export const ItemPost = ( props : IntemPostProps) => {
    const {post} = props;
    
    let resumo = post.excerpt.substr(0, 140);

    return (

        <article className={styles.containerPost} key={post.slug}>
            <Link  href={`/post/${post.slug}`}>
                <a>
                    <img src={post.image} alt='image' />
                </a>
            </Link>
            <div className={styles.containerContent}>
                <Link className={styles.teste} href={`/post/${post.slug}`}>
                    <div className={styles.containerTags}>
                        <a className={styles.buttonTags}>
                            <div></div>
                            <p>{post.tags}</p>
                        </a>
                    </div>
                </Link>
                <Link  href={`/post/${post.slug}`}>
                    <a className={styles.containerTitle}>
                        <h3>{post.title}</h3>
                    </a>
                </Link>
                <div className={styles.containerTime}>
                    <time>{post.updatedAt}</time> 
                </div>
                <div className={styles.containerExcerpt}>
                    <Link  href={`/post/${post.slug}`}>
                        <a>
                            <p>{resumo + "..."}</p>
                        </a>
                    </Link>
                </div>   
            </div>
        </article>
        
    );
}