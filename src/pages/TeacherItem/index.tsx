import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/17395606?s=460&u=2e6fdacdd23805d664cc1a266d5c30e11a6614c9&v=4" alt="Imagem do usuário"/>
                <div>
                    <strong>Jonathan F. K.</strong>
                    <span>Lorem ipsun</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br /><br />
                Nunc auctor tortor et urna ultrices, nec vulputate erat facilisis.
            </p>
            
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem;