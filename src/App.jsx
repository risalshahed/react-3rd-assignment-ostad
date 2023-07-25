import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/Header'
import './milligram.css'
import Home from './pages/Home'
import Income from './pages/Income'
import Expense from './pages/Expense'
import NotFound from './pages/NotFound'

function App() {
    return (
    <div>
        <Header />
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/home' Component={Home} />
            <Route path='/income' Component={Income} />
            <Route path='/expense' Component={Expense} />
            <Route path='*' Component={NotFound} />
        </Routes>
    </div>
    )
}

export default App