import Link from "next/link";
import React from "react";

import styles from './styles.module.scss'

import { IntemPostProps } from "../../../../modules/itemPostPros";

export const Tags = ( props : IntemPostProps) => {
    const {post} = props;

    return(
        <>
            {post.tags.length === 0 ? "" :
                <Link href={`/post/${post.tags}`}>
                    <div className={styles.containerTags}>
                        <a className={styles.buttonTags} >
                            <div></div>
                            <p>{post.tags}</p>
                        </a>
                    </div>
                </Link>
            }
        </>
    )
}