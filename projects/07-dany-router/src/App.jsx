import HomePage from "./Pages/HomePage"
import Router from "./Route/Router"
import Route from "./Route/Route"
import { Paths } from "./Utils/constants"
import { lazy, Suspense } from "react"

const AboutPage = lazy(()=> import("./Pages/AboutPage"))
const SearchPage = lazy(()=> import("./Pages/SearchPage"))

function App() {
  
  const routes = [
    {
      Path : Paths.HOME,
      Component : HomePage
    },
    // {
    //   Path : Paths.ABOUT,
    //   Component : AboutPage
    // },
    // {
    //   Path : Paths.SEARCH,
    //   Component : SearchPage
    // },
  ]

  return (
    <main>
      <Suspense>
        <Router  routes={routes} >
          <Route Path={Paths.ABOUT} Component={AboutPage}/>
          <Route Path={Paths.SEARCH} Component={SearchPage}/>
        </Router>
      </Suspense>
    </main>
  )
}

export default App
