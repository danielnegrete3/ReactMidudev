import './App.css'
import { Header } from './components/Header'
import { Articles } from './components/Articles'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import {Filters} from './components/Filters'
import {useFilter} from './hooks/useFilter'
import {products as initArticles} from './mocks/articles.json'
import { CartProvider } from './contexts/CartContext'

function App() {
  const {filterArticles} = useFilter()

  const articles = filterArticles(initArticles)

  return (
    <CartProvider>
      <Header />
      <Filters />
      <Cart />
      <Articles articles={articles}/>

      <Footer />
    </CartProvider>
  )
}

export default App
