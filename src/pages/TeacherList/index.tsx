import React from 'react';
import './style.css'
import PageHeader from '../PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    )
}

export default TeacherList;