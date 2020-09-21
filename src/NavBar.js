import React from 'react'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
    let history = useHistory()

    return (
        <div className="navbar">
            <button onClick={() => history.push('/')}>Home</button>
            <button onClick={() => history.push('/scroll')}>Scroll</button>
            <button onClick={() => history.push('/logins')}>Logins</button>
        </div>
    )
}

export default NavBar
