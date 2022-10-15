import React from "react";
import Link from "next/link";

import styles from './styles.module.scss' 

export const Menu = () =>{
    return(
        <nav className={styles.containerMenu}>
            <ul className={styles.dropdownMenu}>
                <li>
                    <Link  href="#">Categoria</Link>
                    <ul className={styles.dropdownSubmenu}>
                        <li><Link  href="#">Artes</Link></li>
                        <li><Link  href="#">Cinema</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#">Cultura</Link>
                    <ul className={styles.dropdownSubmenu}>
                        <li><Link href="#">Artes</Link></li>
                        <li><Link href="#">Cinema</Link></li>
                        <li><Link href="#">Histórias</Link></li>
                        <li><Link href="#">Pinturas</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#">Parcerias</Link>
                    <ul className={styles.dropdownSubmenuGrande}>
                        <section>
                            
                        </section>
                    </ul>
                </li>
                <li>
                    <Link href="#">Contato</Link> 
                </li>
                <li>
                    <Link href="#">Sobre &#9660;</Link>
                    <ul className={styles.dropdownSubmenu}>
                        <li><Link href="#">Noticias</Link></li>
                        <li><Link href="#">Novidades</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}


                    