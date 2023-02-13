import { Card } from 'antd';
import React from 'react';
import Image from 'next/image';
import classes from '@/styles/Article.module.css'
import Link from 'next/link';

type PropsType = {
    image: string
    date: string
    title: string
    description: string
}

const Article: React.FC<PropsType> = ({ image, date, title, description }) => {
    return (
        <div>
            <Link href={'#'}>
                <Card
                    hoverable
                    className={classes.article}
                >
                    <>
                        <img src={image} alt='Title Image' className={classes.image} />
                        <p className={classes.date}>{date}</p>
                        <h3 className={classes.title}>{title}</h3>
                        <p className={classes.description}>{description}</p>
                    </>
                </Card>
            </Link>
        </div>
    );
};

export default Article;