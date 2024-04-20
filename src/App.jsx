import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Member from './pages/Member'
import BookList from './pages/BookList'
import BookCard from './pages/BookCard'
import IssueBook from './pages/IssueBook'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/member' element={<Member/>}/>
        <Route path='/books' element={<BookList/>}/>
        <Route path='/book/:id' element={<BookCard/>}/>
        <Route path='/issuebook/:userId?' element={<IssueBook/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
