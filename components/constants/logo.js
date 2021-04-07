import React from 'react';
import Link from 'next/link'
import { Image } from 'antd';

export default function Logo() {
    return (
        <>
            
                <div className="app-logo">
                    <Link href="/">
                    <Image preview={false}
                        width="70px"
                        height="70px"
                        src="https://cdn.pixabay.com/photo/2017/11/16/15/10/corn-2954888_960_720.png"
                    />
                    </Link>
                    <a className="logo-title" href="/">EventosChoclo</a>
                </div>
            
        </>
    )
}
