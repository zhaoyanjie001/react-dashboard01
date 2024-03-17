import React from 'react'
import './user-info.scss'

const UserInfo = ({ user }) => {
    return (
        <div className='user-info'>
            {/* <div className="user-info__img">
                <img src={} alt="" />
            </div> */}
            <div className="user-info__name" align="center">
                <span>{window.localStorage.getItem('loginName')}</span>
            </div>
        </div>
    )
}

export default UserInfo
