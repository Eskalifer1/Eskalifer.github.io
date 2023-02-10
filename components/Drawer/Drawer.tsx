import { Drawer, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import React from 'react';
import classes from '@/styles/Navigation.module.css'
import { CloseOutlined } from '@ant-design/icons';


type PropsType = {
    open: boolean
    onClose: () => void
}

const DrawerComponent: React.FC<PropsType> = ({ onClose, open }) => {

    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem(<div className={`${classes.link} Drawer__Item__Link`}>Categories</div>, 'sub1', null, [
            getItem(<div className={`${classes.link} Drawer__Item__Link`}>Art</div>, '26', null, [getItem(<Link href="#" className={classes.link}>Design</Link>, '11', null)]),
            getItem(<Link href="#" className={classes.link}>Auto Help</Link>, '12'),
            getItem(<Link href="#" className={classes.link}>Biographies</Link>, '13'),
            getItem(<Link href="#" className={classes.link}>Comics</Link>, '14'),
            getItem(<Link href="#" className={classes.link}>Economy</Link>, '15'),
            getItem(<Link href="#" className={classes.link}>Essay</Link>, '16'),
            getItem(<Link href="#" className={classes.link}>Investigation</Link>, '17'),
            getItem(<Link href="#" className={`${classes.link} Drawer__Item__Link`}>Narrative</Link>, '18', null, [
                getItem(<Link href="#" className={classes.link}>Novel</Link>, '19'),
                getItem(<Link href="#" className={classes.link}>Poetry</Link>, '20'),
                getItem(<Link href="#" className={classes.link}>Stories</Link>, '21'),
                getItem(<Link href="#" className={classes.link}>Theaty</Link>, '22'),
            ]),
            getItem(<Link href="#" className={classes.link}>Psyhology</Link>, '23'),
            getItem(<Link href="#" className={classes.link}>Philosophy</Link>, '24'),
            getItem(<Link href="#" className={classes.link}>Sociology</Link>, '25'),
        ]),
        getItem(<Link href="#" className={classes.link}>Shop</Link>, '1', null),
        getItem(<Link href="/" className={classes.link}>Blog</Link>, '2', null),
        getItem(<Link href="#" className={classes.link}>Cart</Link>, '3', null),
        getItem(<Link href="#" className={classes.link}>Checkout</Link>, '4', null),
        getItem(<Link href="#" className={classes.link}>All Book Categories</Link>, '5', null),
        getItem(<Link href="#" className={classes.link}>All Book Authors</Link>, '6', null),
        getItem(<Link href="#" className={classes.link}>Contact</Link>, '7', null),
        getItem(<Link href="#" className={classes.link}>Sample Page</Link>, '8', null),
        getItem(<Link href="#" className={classes.link}>Privacy Policy</Link>, '9', null),
        getItem(<Link href="#" className={classes.link}>404</Link>, '10', null)
    ];
    return (
            <Drawer className={classes.drawer} style={{ backgroundColor: '#F15A24'}} placement="right" onClose={onClose} open={open} closeIcon={<CloseOutlined className={classes.closeIcon} />}>
                <Menu
                    style={{ border: 0 }}
                    defaultOpenKeys={['sub1']}
                    mode={'inline'}
                    items={items}
                    className={classes.menu}
                />
            </Drawer>
    );

};

export default DrawerComponent;