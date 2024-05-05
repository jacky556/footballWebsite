import React from 'react'
import { columns, sponsorsRow } from './Constants'
import s from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {

    return (
        <React.Fragment>
            <div className={s.sponsorsContainer}>
                <div className={s.sponsorsInnerContainer}>
                    {
                        sponsorsRow.map(row => (
                            <div className={s.sponsorsRow}>
                                {
                                    row.map(item => (
                                        <img 
                                            src={item}
                                            className={s.sponsorImage}
                                        />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={s.footerContainer}>
                <div className={s.footerInnerContainer}>
                    {
                        columns.map(item => 
                            <div className={s.footerColumnContainer}>
                                <div className={s.titleContainer}>
                                    {item.title}
                                </div>
                                {
                                    item.routes.map(route => 
                                        <div className={s.routeContainer}>
                                            <a className={s.routeText}>
                                                {route.title}
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <hr/>
                <div className={s.iconSection}>
                    <Image
                        src={"/footerImg.png"}
                        height={98}
                        width={98}
                    />
                    <div className={s.copyright}>
                        {'Copyright (c) 2024 The Football Association of Hong Kong, China Limited. All rights reserved.'}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer