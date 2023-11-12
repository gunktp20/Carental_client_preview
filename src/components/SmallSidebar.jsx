import React from 'react'
import { useAppContext } from '../context/appContext'
import Wrapper from "../assets/wrappers/SmallSidebar";
import Text from './Text';
import { FaTimes } from "react-icons/fa";
import NavLinks from './NavLinks';


function SmallSidebar() {
  const { showSidebar,toggleSidebar} = useAppContext()
  return (
    <Wrapper>
      <div className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }>
          <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
              <FaTimes/>
          </button>
          <header>
            <Text width="180px" />
          </header>
          <NavLinks toggleSidebar={toggleSidebar}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar 
