import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <NavLink>
        <Link to='/'>Home</Link>
        <Link to='/income'>Income</Link>
        <Link to='/expense'>Expense</Link>
      </NavLink>
    </header>
  )
}
