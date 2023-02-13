import React, { useState } from 'react';
import logo from '../../assets/images/opus-logo.svg'
import { LoginOutlined, MenuUnfoldOutlined, ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from 'antd';
import Drawer from 'components/Drawer/Drawer';

import classes from '@/styles/Navigation.module.css'

const Navigation: React.FC = () => {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    };

    const onClose = () => {
        setOpen(false)
    }
    return (
        <div className={`wrap ${classes.navigation} navigation`}>
            <Link href='/' className={classes.elementWrap}>
                <Image className={classes.logo} src={logo} alt={'Company Logo'}></Image>
            </Link>
            <div className={`${classes.elementWrap} ${classes.buttons}`}>
                <div className={classes.functionalButtons}>
                    <Link href={'/registration'}>
                        <UserAddOutlined className={classes.functional} />
                    </Link>
                    <Link href={'/login'}>
                        <LoginOutlined className={classes.functional} />
                    </Link>
                    <Link href={'/#'}>
                        <Badge count={0} showZero>
                            <ShoppingCartOutlined className={classes.cart} />
                        </Badge>
                    </Link>
                </div>
                <button className={classes.more} onClick={showDrawer}>
                    <MenuUnfoldOutlined />
                </button>
            </div>
            <Drawer onClose={onClose} open={open} />
        </div>
    )
}

export default React.memo(Navigation);