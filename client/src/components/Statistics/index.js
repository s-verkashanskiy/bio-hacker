// http://jquense.github.io/react-big-calendar/examples/index.html#intro
import React, {useEffect, useState} from 'react';
import { Calendar, momentLocalizer, Navigate, Views } from 'react-big-calendar';
import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import moment from 'moment';
import * as dates from 'date-arithmetic';
import 'moment/locale/ru';  // without this line it didn't work
import 'react-big-calendar/lib/css/react-big-calendar.css';


moment.locale('ru');

export default function Statistics({  }) {
  const [error, setError] = useState(false);
    const testEvents = [
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 25, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 25, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 22, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 22, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 1,
        'allDay': false,
        'start': new Date(2020, 6, 23, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 23, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 2,
        'allDay': false,
        'start': new Date(2020, 6, 24, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 24, 14, 0), // 2.00 PM 
      },
    ];
  const [course, setCourse] = useState({events: testEvents});

  useEffect(() => {
    (async() => {
      const response = await fetch('/course');
      
      const json = await response.json();
      if (response.status === 200) {
        json.course.events.map((event, index) => {
          json.course.events[index].start = new Date(event.start);
          json.course.events[index].end = new Date(event.end);
        })
        setCourse(json.course);
      }
      return setError(json.message);
    })();
  },[]);


  const localizer = momentLocalizer(moment)

  return (
    <div className='container mt-4' style={{ height: '600px' }}>
      {error && <span className="error">{error}</span>}
      <Calendar
        localizer={localizer}
        events={course.events}
        step={240}
        drilldownView='day'
        // view='month'
        defaultView={Views.AGENDA}
        defaultDate={new Date(2020, 6, 22)}
        // defaultDate={course.startDate}
        views={{ month: true, week: MyWeek, day: true, agenda: true }}
        // views={'month', 'work_week', 'week', 'day', 'agenda'}
        min={new Date(2020, 6, 22, 6, 0)} // 8.00 AM
        max={new Date(2020, 6, 22, 21, 0)} // Max will be 6.00 PM!
        // dayPropGetter={customDayPropGetter}
        // slotPropGetter={customSlotPropGetter}
        components={{
          event: Event,
          agenda: {
            event: EventAgenda,
          },
        }}
        // showMultiDayTimes
        // popup
        // timeslots={8}
        // onSelectSlot={slotSelected}
        // onSelectEvent={eventSelected}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
} 


function eventStyleGetter(event, start, end, isSelected) {
  // const backgroundColor = '#' + event.hexColor;
  const style = {
      backgroundColor: 'beige',
      // borderRadius: '0px',
      // opacity: 0.8,
      color: 'steelblue',
      // border: '0px',
      // display: 'block'
  };
  if (event.result === 1) {
    style.backgroundColor = "lightgreen";
    style.color = "black";
  } else if (event.result === 2) {
    style.backgroundColor = "salmon";
    style.color = "yellow";
  };
  return {
      style: style
  };
}

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  )
}

function EventAgenda({ event }) {
  return (
    <span>
      <em >{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}
// style={{ color: 'steelblue' }}
const customDayPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
      },
    }
  else return {}
}

const customSlotPropGetter = date => {
  if (date.getDate() === 3 || date.getDate() === 5)
    return {
      className: 'special-day',
    }
  else return {}
}

function MyWeek(props) {
    let range = MyWeek.range(props.date)

    return <TimeGrid {...props} range={range} eventOffset={15} />
}

MyWeek.range = date => {
  let start = date
  let end = dates.add(start, 2, 'day')

  let current = start
  let range = []

  while (dates.lte(current, end, 'day')) {
    range.push(current)
    current = dates.add(current, 1, 'day')
  }

  return range
}

MyWeek.navigate = (date, action) => {
  switch (action) {
    case Navigate.PREVIOUS:
      return dates.add(date, -3, 'day')

    case Navigate.NEXT:
      return dates.add(date, 3, 'day')

    default:
      return date
  }
}
MyWeek.title = date => {
  return `Nikolay's week: ${date.toLocaleDateString()}`
}
