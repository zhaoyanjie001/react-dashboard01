import React from 'react'
import Data from '../data/data.json';
import Header from '../components/header/Header';
import { Link, Router, Routes } from 'react-router-dom';
const List = () => {
    const title = Data.data.header.title;
    const text = Data.data.header.text;
    return (
        <div>
            This is a List page
            <div>
                {/* <Header></Header> */}
                
            </div>
            <div>
            
                <Link to="/charper01" component={()=><div>charper01</div>}>charper01</Link><br/>
                <Link to="/charper0201" component={()=><div>charper0201</div>}>charper0201</Link><br/>
                <Link to="/charper0202" component={()=><div>charper0202</div>}>charper0202</Link><br/>
                <Link to="/charper03" component={()=><div>charper03</div>}>charper03</Link><br/>
            </div>
        </div>
        
        
    )
}

export default List
