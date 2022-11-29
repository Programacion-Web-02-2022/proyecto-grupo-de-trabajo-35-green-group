import classes from './App.module.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Feed from './views/FeedView/Feed';
import NotFoundView from './views/NotFoundPage/NotFoundView';
import AuthView from './views/AuthView/AuthView'
function App() {

  return (
    <div className={classes["App"]} >
      { /* HEADER */}
      <Header />

      { /* MAIN > Los hijos son reemplazables */}
      <main>
        <Routes>
          <Route index element={<Feed/>} />
          <Route path='auth/*' element={<AuthView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
      </main>

      { /* FOOTER */}
      <Footer></Footer>
    </div>
  )
}

export default App
