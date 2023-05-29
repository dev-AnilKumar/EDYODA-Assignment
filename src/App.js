import React from 'react'
import './App.css'
import Header from './components/header/Header'
import PaymentPage from './components/paymentpage/PaymentPage'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <PaymentPage />
    </div>
  )
}

export default App