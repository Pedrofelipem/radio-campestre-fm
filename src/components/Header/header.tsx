import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles  from "./styles.module.scss";

import { Menu } from "./Menu/menu";
import { Player } from "./Player/player";

export const Header = () => {
    const [trocarCor, setTrocarCor] = useState<boolean>(false);
    useEffect( () => {
        const scroll1 = () => {
            let posicaoScrollY = window.scrollY;
            if (posicaoScrollY > 60) {
                setTrocarCor(true);
            } else {
                setTrocarCor(false);
            }
        }

        window.addEventListener('scroll', scroll1);

    }, []);
    
    return (
        
        <header className={trocarCor ? `${styles.activeColor}` : `${ styles.headerContainer}` } >
            <div className={styles.centralizer}>
                <div className={styles.containerImg}>
                <Link href="/"><img src="/images/logo-campestre-fm.png" alt="campestre fm" width={120} height={120}/></Link> 
                </div>
                <Player/>
                <Menu/>
            </div>
        </header>
    );
}