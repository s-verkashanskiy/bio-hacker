import React, { useState } from 'react';
// import DayPicker from 'react-date-picker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-day-picker/lib/style.css';

 
export default function () {
  const [value, onChange] = useState(new Date());

  return (
      <>
          <div>
            <h5 className="card-title">Выберите когда вы готовы начать</h5>
              <Calendar locale={'ru'} 
              style= {{display: "flex", justifyContent:"space-around"}}
              onChange={onChange}
              value={value}
              />
          </div>
      </>
  )
}

