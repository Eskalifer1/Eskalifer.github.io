import React, { Dispatch, SetStateAction, useState } from 'react'
// components
import Link from 'next/link'
import { Button } from 'antd'
import { CaretLeftOutlined, CaretUpOutlined, DesktopOutlined, GitlabFilled, MobileOutlined, ShoppingCartOutlined, TabletOutlined } from '@ant-design/icons'

import classes from '@/styles/Header.module.css'

// type PropsType = {
//     setDevice: Dispatch<SetStateAction<DeviceType>>
// }
// type DeviceType = 'phone' | 'tablet' | 'desktop'

export const HeaderComponent: React.FC = () => {

    const [isHidden, setIsHidden] = useState(false)

    return <header className={isHidden ? `${classes.header} ${classes.headerHidden}` : classes.header}>
        <Link href={'#'} className={classes.logo}> <CaretLeftOutlined style={{ marginRight: 5 }} /> OPUS - Тема книжкового магазину WooCommerce</Link>
        <div className={classes.devices}>
            <button title='Телефон' className={`${classes.device} ${classes.mobile}`} >
                <MobileOutlined />
            </button>
            <button title='Планшет' className={`${classes.device} ${classes.tablet}`}>
                <TabletOutlined />
            </button>
            <button title="Комп'ютер" className={`${classes.device} ${classes.desktop}`}>
                <DesktopOutlined />
            </button>
        </div>
        <div className={classes.buttons}>
            <button className={`${classes.addToCart} ${classes.headerBtn}`}>
                <ShoppingCartOutlined className={classes.icon} />
                Додати до кошика
            </button>
            <button className={`${classes.download} ${classes.headerBtn}`}><GitlabFilled className={classes.downloadIcon} />  Отримайте необмежену кількість завантажень</button>
            <button className={`${classes.device} ${classes.cart}`}><ShoppingCartOutlined /></button>
        </div>
        <button className={isHidden ? classes.hide : `${classes.hide} ${classes.rotate}`} onClick={() => setIsHidden((prev) => !prev)}><CaretUpOutlined /></button>
    </header>
}