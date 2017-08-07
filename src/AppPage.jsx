import React from 'react'
// import PropTypes from 'prop-types'
import './App.css'
import HistoryInput from './HistoryInput'
import HistoryList from './HistoryList'

function AppPage() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Redux History Sync</h2>
        <HistoryInput />
      </div>
      <HistoryList />
    </div>
  )
}
AppPage.propTypes = {
}
export default AppPage
