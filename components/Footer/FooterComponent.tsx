import React from 'react';
import classes from '@/styles/Footer.module.css'
import Image from 'next/image';
import payment from '../../assets/images/payment.png'
import { ArrowUpOutlined, FacebookFilled, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { ConfigProvider, FloatButton } from 'antd';

const FooterComponent: React.FC = () => {
    return (
        <>
            <footer className={`wrap ${classes.footer}`}>
                <div className={classes.footerBlock}>
                    <div className={classes.block}>
                        <h3 className={classes.title}>Our Work Is</h3>
                        <p className={classes.description}>Designed, crafted and built with WordPress, Elementor and ACF Pro.</p>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>Contact</h3>
                        <p className={classes.description}>
                            Phone: 02.62.87.59636 <br />
                            Email: mail@example.com <br />
                            35 Rue Michel Ange, LE HAVRE, 76610
                        </p>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>Secured Payment</h3>
                        <Image src={payment} alt='Payment System'></Image>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>About</h3>
                        <p className={classes.description}>
                            All Rights Reserved <br />
                            Designed with ❤️ and 🧠 by RAMSTHEMES
                        </p>
                    </div>
                </div>
                <div className={classes.footerBottom}>
                    <div className={`${classes.item}`}>
                        <p className={classes.description}>Copyright © 2023 RAMSTHEMES</p>
                    </div>
                    <div className={`${classes.links}`}>
                        <Link href={''}><FacebookFilled className={classes.link} /></Link>
                        <Link href={''}><TwitterOutlined className={classes.link} /></Link>
                        <Link href={''}><InstagramOutlined className={classes.link} /></Link>
                        <Link href={''}><YoutubeOutlined className={classes.link} /></Link>
                    </div>
                </div>
            </footer>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#F15A24'
                }
            }}>
                <FloatButton.BackTop visibilityHeight={80} type={'primary'} icon={<ArrowUpOutlined />} />
            </ConfigProvider>
        </>
    );
};

export default React.memo(FooterComponent);