import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModel from '../ProfileModel/ProfileModel'
const InfoCard = () => {
  const [modelOpened,setModelOpened]=useState(false)
  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModelOpened(true)}/>
            <ProfileModel modelOpened={modelOpened} setModelOpened={setModelOpened}/>
            </div>
           
        </div>
        <div className="info">
          <span>
            <b>Status </b>
          </span>
          <span>In Relation Ship</span>
        </div>
        <div className="info">
          <span>
            <b>Lives in </b>
          </span>
          <span>Bengaluru</span>
        </div>
        <div className="info">
          <span>
            <b>Works at </b>
          </span>
          <span>Pichi Company </span>
        </div>
        <button className='button logout-button'>LogOut</button>
    </div>
  )
}

export default InfoCard