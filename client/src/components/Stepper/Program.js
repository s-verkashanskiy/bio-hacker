import React, { useState, useEffect } from 'react';
import ProgramVideo from '../program/ProgramVideo';
import ProgramCheckList from '../program/ProgramCheckList';
import ProgramAction from '../program/ProgramAction';
import ProgramCalendar from '../program/ProgramCalendar';
import ProgramPayment from '../program/ProgramPayment';
import VideoPlayer from '../VideoPlayer';
import { useDispatch, useSelector } from 'react-redux';
import { stepPlus } from '../../redux/actions/stepper';
import { programAdd } from '../../redux/actions/program';

export default function () {
  const [name, setName] = useState('Detox');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const program = useSelector(state => state.program);
  useEffect(() => {
    (async () => {
      const response = await fetch('/program');
      const json = await response.json();
      if (response.status === 200) {
        dispatch(programAdd(json));
      }
      return setError(json.message);
    })();
  }, []);
  return (
    <>
      {/* <div className="container card" style={{position:"relative"}} >
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramVideo /></div>

      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramCalendar/></div>
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramPayment/></div>
    </div> */}
      <h5 className="card-title mt-4 d-flex justify-content-around"> Мы подобрали для вас программу {program.title}</h5>
      <div className=" mb-3 mt-10">
        <div className="d-flex justify-content-around align-item-center">
          <ProgramVideo />
        </div>
      </div>

      <div className="container mb-3 mt-10">
        <div className="d-flex justify-content-around align-item-center">
          <ProgramCheckList />
        </div>
      </div>

      <div>
        <div className="container">
          <ProgramAction />
        </div>
      </div>
    </>
  )

}
