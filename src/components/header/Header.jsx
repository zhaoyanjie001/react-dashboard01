import React from 'react'
import Data from '../../data/data.json';
import ParentCom  from './ParentCom';
import ParentCom1 from './ParentCom1';
const Header = props => {
    const title = Data.data.main.title;
    const text = Data.data.main.text;
    return (
        <header>
            <ParentCom></ParentCom>
            <h1 className="header__title">{ title }</h1>
            <p className="header__text" dangerouslySetInnerHTML={{ __html: text }}></p>
            <ParentCom1></ParentCom1>
        </header>
    )
}

export default Header