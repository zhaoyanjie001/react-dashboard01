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
                <Link to="/charper0203" component={()=><div>charper0203</div>}>charper0203</Link><br/>
                <Link to="/charper0204" component={()=><div>charper0204</div>}>charper0204</Link><br/>
                <Link to="/charper0205" component={()=><div>charper0205</div>}>charper0205</Link><br/>
                <Link to="/charper0206" component={()=><div>charper0206</div>}>charper0206</Link><br/>
                <Link to="/charper0207" component={()=><div>charper0207</div>}>charper0207</Link><br/>
                <Link to="/charper0208" component={()=><div>charper0208</div>}>charper0208</Link><br/>
                <Link to="/charper0209" component={()=><div>charper0209</div>}>charper0209</Link><br/>
                <Link to="/charper03" component={()=><div>charper03</div>}>charper03</Link><br/>
            </div>
        </div>
        
        
    )
}

export default List
