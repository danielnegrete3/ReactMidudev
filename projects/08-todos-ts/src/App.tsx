import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Todos } from "./components/Todos"
import { useTodos } from "./hooks/useTodos"

function App() : React.FC {
  const {todosFiltered} = useTodos()

  return (
    <main className="todoapp">

      <Header />

      <Todos todos={todosFiltered} />

      <Footer />
    </main>
  )
}

export default App
