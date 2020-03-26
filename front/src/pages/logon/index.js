import React from 'react';
import './styles.css'
import guitar from '../../assets/Guitar_hero_logo.png'
import logan from '../../assets/ProjetoHero.jpg'
import {FiLogIn} from 'react-icons/fi'

export default function Logon() {
    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logan} alt='Be the heroe'/>
                <form>
                    <h1>Logon</h1>
                    <input placeholder='ID'/>
                    <button type='submit'>In</button>
                    <a href='/register'>Não tenho cadastr</a>
                    <FiLogIn size={16} color="#E02041"/>
                </form>
            </section>
            <img src={guitar} alt='Heros'/>
        </div>
    )
};
