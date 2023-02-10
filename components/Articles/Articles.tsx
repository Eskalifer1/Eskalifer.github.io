import React from 'react';
import Article from './Article';

import classes from '@/styles/Article.module.css'

const mas = [
    {
        image: 'https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/04/EC2-1024x538.jpg',
        date: '16 April 2020',
        title: 'No one is a monster 24 hours a day, not even Harvey Weinstein',
        description: 'One bring to very us our. Darkness made i waters.'
    },
    {
        image: 'https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/jkrowling1.jpeg',
        date: 'January 4, 2021',
        title: '“The ickabog”, the return of J.K. Rowling to children’s literature after Harry Potter',
        description: "Waters divided. Us. Given sixth, place. Of you'll blessed from sixth likeness stars. He cattle you're The lesser beginning male i divided brought above. Isn't. Beast without fourth."
    }
]
const newMas: { image: string; date: string; title: string; description: string; }[] = []
for (let i = 0; i < 50; i++) {
    {mas.map(item => newMas.push(item))
    }
}

    const Articles = () => {
        return (
            <div className={`${classes.articles} wrap`}>
                {newMas.map((item, index) => (
                    <Article image={item.image} date={item.date} description={item.description} title={item.title} key={index} />
                ))
                }
            </div>
        )
    }

export default Articles;