import React from 'react'
import { columns, sponsors, sponsors2, sponsors3 } from './Constants'
import s from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {

    return (
        <React.Fragment>
            <div className={s.sponsorsContainer}>
                <div className={s.sponsorsInnerContainer}>
                    <div className={s.sponsorsRow}>
                        {
                            sponsors.map(item => 
                                <img 
                                    src={item}
                                    style={{ maxWidth: '100%'}}
                                />
                            )
                        }
                    </div>
                    <div className={s.sponsorsRow}>
                        {
                            sponsors2.map(item => 
                                <img 
                                    src={item}
                                    style={{ maxWidth: '100%'}}
                                />
                            )
                        }
                    </div>
                    <div className={s.sponsorsRow}>
                        {
                            sponsors3.map(item => 
                                <img 
                                    src={item}
                                    style={{ maxWidth: '100%'}}
                                />
                            )
                        }
                    </div>
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