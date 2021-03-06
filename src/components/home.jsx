import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/css/home.css'
import Nav from './site/nav'
import Dash from './dashboard/dash'
import SideNav from './dashboard/sideNav'
import Coa from './dashboard/master/coa'
import Company from './dashboard/master/company'
import Customer from './dashboard/master/customer'
import User from './dashboard/master/user'
import Journal from './dashboard/activity/journal'
import Depreciation from './dashboard/activity/depreciation'
import ProfitAndLoss from './report/profitandloss'
import CashFlow from './report/cashflow'
import GeneralLedger from './report/generalledger'
import GeneralJournal from './report/generalJournal'
import ReadXlsx from './excel/readXlsx'
import Order from './order'
import Payment from './payment'

const Home = (props) => {
  const [data, setData] = useState('')
  return (
    <>
      <Nav />
      <div className="__main">
        <div className="__body">
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
                <Route excat path="/" element={<Dash />} />
                <Route exact path="/company" element={<Company />} />
                <Route exact path="/chartofaccount" element={<Coa />} />
                <Route exact path="/customer" element={<Customer />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/journal" element={<Journal />} />
                <Route exact path="/depreciation" element={<Depreciation />} />
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
