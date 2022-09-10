import React from "react";
import ReactAudioPlayer from 'react-audio-player';

import styles from './styles.module.scss' 

export const Player = () => {
    return(
        <div className={styles.containerPlayer}>
            <ReactAudioPlayer
                className={styles.player}
                src="http://stm21.srvaudio.com.br:10450/stream?1662845893340"
                autoPlay={true}
                controls
            />
        </div>
    )
}