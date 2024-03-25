import Header from "./components/Header"
import Projects from "./components/Projects"
import Todos from "./components/Todos"
import Wrapper from "./components/Wrapper"
function App() {
  return (
    <>
      <Header/>
      <div className="flex">
      <Projects/>
      <Todos/>
      </div>
    </>
  )
}

export default App
