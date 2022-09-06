import React from "react";
import Head from "next/head";
import Link from "next/link";

import { faSquareFacebook, faSquareTwitter, faSquareWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ItemDetalhePostProps } from "../../../../modules/itemDetalhePostProps";

import styles from './styles.module.scss'
import { AuthorTime } from "../authorTime/authorTime";
import { Tags } from "../tags/tags";

export const ItemDetalhePost = ( props : ItemDetalhePostProps) => {
    const {post} = props;
    return(
        <div>
            <Head>
               <title>{post.title}</title>
            </Head>

            <article className={styles.container}>
                <div className={styles.containerPrimary}>

                    <Tags post={post}/>
                    
                    <h1>{post.title}</h1>

                    <AuthorTime post={post}/>

                    <p className={styles.linha}></p>

                    <div className={styles.iconesRedesSociais}>
                        <a className={styles.facebook}>
                            <FontAwesomeIcon icon={ faSquareFacebook} />
                        </a>
                        <a className={styles.twitter}>
                            <FontAwesomeIcon icon={ faSquareTwitter } />
                        </a>
                        <a className={styles.whatsapp}>
                            <FontAwesomeIcon icon={ faSquareWhatsapp } />
                        </a>
                        <a className={styles.telegram}>
                            <FontAwesomeIcon icon={ faTelegram } />
                        </a>
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