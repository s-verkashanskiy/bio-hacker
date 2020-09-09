import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Statistic from '../components/Statistics';
import ClientChart from '../components/ClientChart';

export default function () {
  const [flag, setFlag] = useState(true)
  return (
    <div className="container">
      <div className="container d-flex justify-content-center row">
        {flag ? 
        <button onClick={()=>{setFlag(!flag)}} className="btn btn-info">Прогресс</button> :
        <button onClick={()=>{setFlag(!flag)}} className="btn btn-info">Календарь</button>}
        {flag ? <Statistic /> : <ClientChart />}
      </div>
    </div>
  )
}
