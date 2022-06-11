import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/css/home.css'
import Coa from './coa'
import Company from './company'
import Customer from './customer'
import User from './user'
import Nav from './nav'
import SideNav from './sideNav'
import Journal from './journal'
import Order from './order'
import Payment from './payment'
import ProfitAndLoss from './profitandloss'
import CashFlow from './cashflow'
import GeneralLedger from './generalledger'
import GeneralJournal from './report/generalJournal'
import ReadXlsx from './excel/readXlsx'

const Home = (props) => {
  const [data, setData] = useState('')
  return (
    <>
      <Nav />
      <div className="__main">
        <div className="__body">
          {/* Title Header */}
          {/* <div className="w-100">
            <div className="container-fluid">
              <div
                className="__title_inline"
                style={{ justifyContent: "flex-start" }}
              >
                <div className="__icon">
                  <i className="bi bi-view-list"></i>
                </div>
                <div className="__title">{window.location.pathname}</div>
              </div>
            </div>
          </div> */}
          <div
            className="w-100"
            style={{ display: 'flex', flexDirection: 'row', height: '85vh' }}
          >
            {/* Sidebar */}
            <div className="__side_bar">
              <SideNav />
            </div>

            {/* Content */}
            <div className="__content">
              <Routes>
                <Route exact path="/company" element={<Company />} />
                <Route exact path="/chartofaccount" element={<Coa />} />
                <Route exact path="/customer" element={<Customer />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/journal" element={<Journal />} />
                {/* <Route exact path="/depreciation" element={<Depreciation />} /> */}
                <Route
                  exact
                  path="/generaljournal"
                  element={<GeneralJournal />}
                />
                <Route
                  exact
                  path="/profitandloss"
                  element={<ProfitAndLoss />}
                />
                <Route exact path="/cashflow" element={<CashFlow />} />
                <Route
                  exact
                  path="/generalledger"
                  element={<GeneralLedger />}
                />
                <Route exact path="/read" element={<ReadXlsx />} />
                <Route exact path="/order" element={<Order />} />
                <Route exact path="/payment" element={<Payment />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
