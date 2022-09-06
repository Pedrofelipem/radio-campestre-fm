import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { faSquareFacebook, faSquareTwitter, faSquareWhatsapp,   } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ItemDetalhePostProps } from "../../../../modules/itemDetalhePostProps";

import styles from './styles.module.scss'
import { AuthorTime } from "../authorTime/authorTime";
import { Tags } from "../tags/tags";

export const ItemDetalhePost = ( props : ItemDetalhePostProps) => {
    const {post} = props;

    const [url, setUrl] = useState('')

    useEffect( () => {
        let url_atual = window.location.href
        setUrl(url_atual)
    },[])
    
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

                    <div className={styles.shareSociais}>
                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} >
                            <a className={styles.facebook} >
                                <FontAwesomeIcon icon={ faSquareFacebook } />
                            </a>
                        </Link>
                        <Link href={`https://twitter.com/intent/tweet?text=${url}`} >
                            <a className={styles.twitter}>
                                <FontAwesomeIcon icon={ faSquareTwitter } />
                            </a>
                        </Link>
                        <Link href={`whatsapp://send?text=CampestreFM:${url}`}>
                            <a className={styles.whatsapp}>
                                <FontAwesomeIcon icon={ faSquareWhatsapp } />
                            </a>
                        </Link>
                        <Link href={`mailto:?Subject=${post.title}&Body=${url}`}>
                            <a className={styles.email}>
                                <FontAwesomeIcon icon={ faSquareEnvelope } />
                            </a>
                        </Link>
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