import React from "react";

import styles from './styles.module.scss';

import { IntemPostProps } from "../../../../modules/itemPostPros";
export const AuthorTime = (props : IntemPostProps) => {
    
    const {post} = props;

    return(
        <>
        <div className={styles.containerTimeAutor}>   
            {post.author.length === 0 ? '' : 
            <div className={styles.containerAuthor}>
                <span><span className={styles.textPor}>Por</span> {post.author}</span>
            </div>
            }
            <div className={styles.containerTime}>
                <time>{post.updatedAt}</time> 
            </div>
        </div>
        </>
    )
}