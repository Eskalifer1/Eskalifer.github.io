import classes from '@/styles/Home.module.css'
import Articles from 'components/Articles/Articles'

import FooterComponent from 'components/Footer/FooterComponent'
import Navigation from 'components/Navigation/Navigation'
import SearchForm from 'components/SearchForm/SearchForm'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#D9E6E3' }}>
      <Navigation />
      <SearchForm />
      <Articles />
      <FooterComponent />
    </div>
  )
}
