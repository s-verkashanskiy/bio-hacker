import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Statistic from '../components/User/statistic';
import Scheduler from '../components/User/scheduler';
import Settings from '../components/Stepper/Settings';

export default function () {
  return (
    <>
    <div className="nav-scroller py-1 mb-2">
      <div classname="nav d-flex justify-content-center">
        <NavLink className="p-2 text-muted" to="/user/statistics">
          Статистика
        </NavLink>
        <NavLink className="p-2 text-muted" to="/user/scheduler">
          Календарь
        </NavLink>
        <NavLink className="p-2 text-muted" to="/user/settings">
          Настройки
        </NavLink>
      </div>
    </div>


    {/* <div className="card text-center">
      <div className="card-header nav d-flex justify-content-center">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/user/statistic">Статистика</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/scheduler">Календарь</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/user/settings">Настройки</Link>
          </li>
        </ul>
      </div> */}
      <div className="card">
         <Settings />
        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}

      </div>
    {/* </div> */}
    </>
  )
}
