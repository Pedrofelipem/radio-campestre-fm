import React, { useEffect, useState } from "react";

import Link from "next/link";

import { faSquareFacebook, faSquareTwitter, faSquareWhatsapp,   } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.scss'

import { ItemDetalhePostProps } from "../../../../../modules/itemDetalhePostProps";

export const ShareSocialNetworks = (props : ItemDetalhePostProps) => {
    const {post} = props
    const [url, setUrl] = useState<string>('')

    useEffect( () => {
        let url_atual = window.location.href
        setUrl(url_atual)
    },[])

    let textWhats : string = 'CampestreFM: '

    return(
        <>
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
                <Link href={`whatsapp://send?text=${textWhats}${url}`}>
                    <a className={styles.whatsapp}>
                        <FontAwesomeIcon icon={ faSquareWhatsapp } />
                    </a>
                </Link>
                <Link href={`mailto:?Subject=${post.title}&${post.image}&Body=${url}`}>
                    <a className={styles.email}>
                        <FontAwesomeIcon icon={ faSquareEnvelope } />
                    </a>
                </Link>
            </div> 
        </>
    )
}