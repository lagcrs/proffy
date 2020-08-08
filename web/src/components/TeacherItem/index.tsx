import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

export default function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/18752456?s=460&u=453c472b8c1da2066ab9ce5da49e394fd59c7f7a&v=4" alt="Larissa Silva"/>

                        <div>
                            <strong>Larissa Silva</strong>
                            <span>Análise e Desenvolvimento de Sistemas</span>
                        </div>
                    </header>

                    <p>
                        Apaixonada por coisas novas. <br/> <br/>
                        Magni vitae omnis quasi ex, aliquid, nulla harum commodi iure delectus, non ipsum ut officia ipsa.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 70,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}