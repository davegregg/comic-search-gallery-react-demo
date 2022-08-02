import './App.css'
import Counter from "./components/Counter/Counter"
import MarvelSearchGallery from './components/MarvelSearchGallery/MarvelSearchGallery'

function App() {
  return (
    <main>
      <h1>Marvel Character Search</h1>

      <section className="counters">
        <Counter initialCount={0} />
        <Counter initialCount={-100} />
        <Counter initialCount={400} />
      </section>

      <MarvelSearchGallery defaultSearchTerm="spider" />
    </main>
  )
}

export default App
