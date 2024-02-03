import React from 'react'
import { NavLink , Link } from 'react-router-dom';
import {BsSearch} from "react-icons/bs";
const Header = () => {
  return (
    <>
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6"><p className='text-white mb-0'>Lorem ipsum dolor sit amet.</p></div>
          <div className="col-6"><p className='text-end text-white mb-0'>phone : <a className='text-white' href="+994709460246">+994709460246</a></p></div>
        </div>
      </div>
    </header>
    <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2 >
              <Link >Electronics.</Link>
            </h2>
          </div>
          <div className="col-5">
            
          <div className="input-group">
          <input type="text" class="form-control py-2" placeholder="Search Product Here .." aria-label="Search Product Here .." aria-describedby="basic-addon2"/>
          <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6'/></span>
          </div>

          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
