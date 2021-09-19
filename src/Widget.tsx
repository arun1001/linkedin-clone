import React from 'react'
import './Widget.scss'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
export const Widget = () => {
  const newsArticles = (heading:string, subtitle:string) => {
    return (<div className="article">
      <div className="articleLeft">
        <FiberManualRecordIcon/>
      </div>
      <div className="articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>)
  } 
  return (
    <div className="widgets">
      <div className="header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      {newsArticles("We are back", "Top news - 10000 readers")}
      {newsArticles("Coronavirus retires", "Top news - 500 readers")}
    </div>
  )
}
