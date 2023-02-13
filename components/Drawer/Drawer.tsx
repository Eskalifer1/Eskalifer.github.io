import { ConfigProvider, Drawer, Menu } from 'antd';
import React from 'react';
import classes from '@/styles/Navigation.module.css'
import { CloseOutlined } from '@ant-design/icons';
import { MenuItems } from './MenuItem';


type PropsType = {
    open: boolean
    onClose: () => void
}

const DrawerComponent: React.FC<PropsType> = ({ onClose, open }) => {

    return (
        <Drawer width={320} className={classes.drawer} style={{ backgroundColor: '#F15A24' }} placement="right" onClose={onClose} open={open} closeIcon={<CloseOutlined className={classes.closeIcon} />}>
            <ConfigProvider theme={{
                components: {
                    Menu: {
                        colorItemTextHover: '#000',
                        colorItemTextSelected: '#000'
                    }
                }
            }}>
                <Menu
                    style={{ border: 0 }}
                    mode={'inline'}
                    items={MenuItems}
                    className={classes.menu}
                />
            </ConfigProvider>
        </Drawer>

    );

};

export default DrawerComponent;