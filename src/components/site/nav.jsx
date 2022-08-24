import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/env.png'
import '../assets/css/nav.css'
import useWindow from '../useWindow'

const Nav = () => {
  const { width } = useWindow()
  return (
    <>
      <div className=" w-100" style={{ backgroundColor: '#1c2126' }}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand navbar-dark justify-content-between sticky-top">
            <Link className="navbar-brand" to="/d">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top __icon"
                alt=""
              />
              {width > 450 ? 'PITARA' : ''}
            </Link>
            <div className="form-inline">
              {/* Search Bar */}

              <div className="input-group search-bar">
                <span className="input-group-text" id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Input group example"
                  aria-describedby="basic-addon1"
                />
              </div>
              {/* Login Information */}
              <div style={{ display: 'flex' }}>
                {width > 450 ? (
                  <>
                    <div className="">
                      <i className="m_icon bi bi-bell"></i>
                    </div>
                    <div className="__help">Help</div>
                  </>
                ) : (
                  ''
                )}
                <div className="">
                  <div
                    className="__avatar"
                    style={{
                      fontSize: '100%',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <span>T</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav
