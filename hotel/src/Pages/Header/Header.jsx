import React from 'react'
import StyleHeader from './Header.module.css'

function Header() {
    return (
        <div className={StyleHeader.bd}>
            <div>Relax in our luxury</div>
            <p className={StyleHeader.pp} data-item='Roqi'>Roqi</p>

            <section>
                <div>
                    <ul className={StyleHeader.menuItems}>
                        <li className={StyleHeader.list}><a className={StyleHeader.ab} href='#' data-item='Accommodation'>Accommodation</a></li>
                        <li className={StyleHeader.list}><a className={StyleHeader.ab} href='#' data-item='Gastronomy'>Gastronomy</a></li>
                        <li className={StyleHeader.list}><a className={StyleHeader.ab} href='#' data-item='Rest'>Rest</a></li>
                        <li className={StyleHeader.list}><a className={StyleHeader.ab} href='#' data-item='Events'>Events</a></li>
                        <li className={StyleHeader.list}><a className={StyleHeader.ab} href='#' data-item='About'>About</a></li>
                    </ul>
                </div>
            </section>
        </div>

    )
}

export default Header