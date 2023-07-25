import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import './milligram.css'
import Home from './components/Home'
import Income from './components/Income'
import Expense from './components/Expense'
import NotFound from './components/NotFound'

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