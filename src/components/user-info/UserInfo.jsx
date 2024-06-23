import React, { useState } from 'react'
import './user-info.scss'
import AppModal from './AppModal';
const UserInfo = ({ user }) => {

    // const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {

    setIsOpen(true);
  }
 
  function closeModal() {
    setIsOpen(false);
  }

    
    return (
        <div className='user-info'>
            {/* <div className="user-info__img">
                <img src={} alt="" />
            </div> */}
            <div className="user-info__name" align="center">
                <span> 
                    <a onClick={openModal}>{window.localStorage.getItem('loginName')}</a>
                    <AppModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        {window.localStorage.getItem('loginName')}
                    </AppModal>
                </span>
               
            </div>
        </div>
    )
}

export default UserInfo
