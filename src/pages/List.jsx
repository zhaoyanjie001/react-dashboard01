import React from 'react'
import Data from '../data/data.json';
import Header from '../components/header/Header';

const List = () => {
    const title = Data.data.header.title;
    const text = Data.data.header.text;
    return (
        <div>
            This is a List page
            <div>
                <Header></Header>
            </div>

        </div>
        
        
    )
}

export default List
