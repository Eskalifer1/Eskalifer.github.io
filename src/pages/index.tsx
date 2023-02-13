import dynamic from 'next/dynamic'
import { useState } from 'react'
import { ArticleType } from 'types/ArticleType';

const SearchForm = dynamic(() => import('components/SearchForm/SearchForm'));
const  Navigation = dynamic(() => import('components/Navigation/Navigation'));
const  FooterComponent = dynamic(() => import('components/Footer/FooterComponent'));
const  Articles = dynamic(() => import('components/Articles/Articles'));

export const articles: ArticleType[] = [
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

export default function Home() {

  const [masofArticles, setMasOfArticles] = useState<ArticleType[] | undefined>(articles)

  return (
    <div style={{ backgroundColor: '#D9E6E3' }}>
      <Navigation />
      <SearchForm setMasOfArticles={setMasOfArticles} masofArticles={masofArticles} />
      <Articles masofArticles={masofArticles} />
      <FooterComponent />
    </div>
  )
}
