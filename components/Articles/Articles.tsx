import React from 'react';
import Article from './Article';
import { ArticleType } from 'types/ArticleType';

export const newMas: { image: string; date: string; title: string; description: string; }[] = []

type PropsType = {
    masofArticles: ArticleType[] | undefined
}

const Articles:React.FC<PropsType> = ({ masofArticles }) => {
    return (
        <div className='grid gap-5 mb-5 wrap grid-cols-[repeat(5,_minmax(150px,_1fr))] md:grid-cols-1 xl:grid-cols-[repeat(2,_minmax(330px,_1fr))]'>
            {masofArticles && masofArticles.map((item, index) => (
                <Article image={item.image} date={item.date} description={item.description} title={item.title} key={index} />
            ))
            }
        </div>
    )
}

export default Articles;