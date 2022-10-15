import React from "react";
import Link from "next/link";

import styles from './styles.module.scss';

import { AuthorTime } from "../authorTime/authorTime";
import { Tags } from "../tags/tags";
import { IntemPostProps } from "../../../../modules/itemPostPros";

export const ItemPost = ( props : IntemPostProps ) => {
    const {post} = props;
    
    let resumo = post.excerpt.substr(0, 140);
   
    return (
        <article className={`${styles.containerPost} ${styles.centralizer}`} key={post.slug}>
            <Link  href={`/post/${post.slug}`}>
                <a>
                    <img src={post.image} alt='image' />
                </a>
            </Link>
            <div className={styles.containerContent}>
                <Tags post={post}/>
                <AuthorTime post={post}/>

                <Link  href={`/post/${post.slug}`}>
                    <a className={styles.containerTitle}>
                        <h3>{post.title}</h3>
                    </a>
                </Link>
                
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