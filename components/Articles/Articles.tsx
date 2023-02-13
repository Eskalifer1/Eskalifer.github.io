import React from 'react';
import Article from './Article';
import classes from '@/styles/Article.module.css'
import { ArticleType } from 'types/ArticleType';

export const newMas: { image: string; date: string; title: string; description: string; }[] = []

type PropsType = {
    masofArticles: ArticleType[] | undefined
}

const Articles:React.FC<PropsType> = ({ masofArticles }) => {
    return (
        <div className={`${classes.articles} wrap`}>
            {masofArticles && masofArticles.map((item, index) => (
                <Article image={item.image} date={item.date} description={item.description} title={item.title} key={index} />
            ))
            }
        </div>
    )
}

export default Articles;