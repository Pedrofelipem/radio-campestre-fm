import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu } from "./Menu/menu";
import { Player } from "./Player/player";
import styles  from "./styles.module.scss";

export const Header = () => {
    const [trocarCor, setTrocarCor] = useState<boolean>(false);
    useEffect( () => {
        function scroll1 () {
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
        <header className={trocarCor ? `${styles.activeColor}` : `${ styles.headerContainer}`} >
            <div className={styles.containerImg}>
               <Link href="#"><Image src="/images/logo-campestre-fm.png" alt="campestre fm" width={120} height={120}/></Link> 
            </div>
            <Player/>
            <Menu/>
        </header>
    );
}