import React from 'react'
import { columns, sponsorsRow, footerImage } from './Constants'
import s from './Footer.module.css'
import Image from 'next/image'
import { hideAllNavBar } from '@/utilities/utilities'

const Footer = () => {

    return (
        <React.Fragment>
            <div onMouseEnter={hideAllNavBar} className={s.sponsorsContainer}>
                <div className={s.sponsorsInnerContainer}>
                    {
                        sponsorsRow.map((row, index) => (
                            <div key={`sponsorsRow${index}`} className={s.sponsorsRow}>
                                {
                                    row.map((item, index) => (
                                        <Image 
                                            src={item}
                                            className={s.sponsorImage}
                                            key={`sponsor${index}`}
                                            alt={`sponsor${index}`}
                                        />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div onMouseEnter={hideAllNavBar} className={s.footerContainer}>
                <div className={s.footerInnerContainer}>
                    {
                        columns.map((item, index) => 
                            <div key={`${item.title} ${index}`}  className={s.footerColumnContainer}>
                                <div className={s.titleContainer}>
                                    {item.title}
                                </div>
                                {
                                    item.routes.map((route, index) => 
                                        <div key={`${route.title} ${index}`} className={s.routeContainer}>
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
                        src={footerImage}
                        height={98}
                        width={98}
                        alt={'footerImage'}
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