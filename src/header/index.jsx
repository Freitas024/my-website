import React from 'react'
import "../styles/header.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <main className='body'>
            <h3>@vinicius</h3>
            <ul className='container-li'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/Sobre">Sobre</Link>
                <Link className='link' to="/Projetos">Projetos</Link>
                <Link className='link' to="/Contatos">Contatos</Link>
            </ul>
        </main>
    )
}