import React from 'react';

import { Image } from 'antd';

export default function Logo() {
    return (
        <>
            
                <div className="app-logo">
                    <Image preview={false}
                        width="70px"
                        height="70px"
                        src="https://cdn.pixabay.com/photo/2017/11/16/15/10/corn-2954888_960_720.png"
                    />
                    <a className="logo-title">Eventos Choclo</a>
                </div>
            
        </>
    )
}
