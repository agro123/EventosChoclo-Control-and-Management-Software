import React from 'react';
import { Image } from 'antd';
import Link from 'next/link'

export default function Logo() {
    return (
        <>
            <div className="app-logo">
                <Link href="/">
                    <a >
                        <Image preview={false}
                            width="50px"
                            height="50px"
                            src="/logo-prev.png"
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a className="logo-title">EventosChoclo</a>
                </Link>
            </div>
        </>
    )
}
