import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnswer } from '../../../redux/actions/questionnaire';
// import './PageOfQuest.scss';

function PageOfQuest({ qi, getPrev, getNext }) {
  let quest = useSelector(state => state.quest);
  const [thisQ, setThisQ] = useState(quest[qi]);
  const dispatch = useDispatch();

  let flag = false;
  if (qi > 0) flag = true;

  function getAns(key) {
    const newData = thisQ.data.map(one => {
      return (
        one.key === key ? { ...one, questionAnswer: !one.questionAnswer } :
          thisQ.type == 'radio' ? { ...one, questionAnswer: false } : one
      )
    })
    quest = quest.map(sec => {
      return (
        sec.questionIndex === thisQ.questionIndex ? { ...sec, data: newData, isAswer: true } : sec
        )
      });
      // console.log(quest);
      dispatch(getAnswer(quest));
    if (thisQ.type == 'radio') {
      setThisQ({...thisQ, data: newData, isAswer: true });
      console.log(thisQ);
    }
  }

  return (
    <div className="container">
      <div className="col-md-6 offset-md-2">
        <div>
          <p className="question__count" style={{fontSize: "18px", fontWeight: "bold", fontFamily: "sansSerif", color: 'grey', opacity: '0.4'}}>{qi + 1}/{quest.length}</p>
          <p className="question__text" style={{fontSize: "22px"}}>{thisQ.questionText}</p>
          {/* <img claxssName="question__img" src={thisQ.image} alt="alt" style={{width: 'auto',
            maxWidth: '100%',
            maxHeight: '220px',
            display: 'block',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            margin: 'auto',
            marginTop: '2rem'}} /> */}
        </div>
        <div className="btn-group-vertical">
          {thisQ.data && thisQ.data.map(second => {
            return (
              <p key={second.key} className="questionLi">
                <label className="btn btn-light" style={{fontSize: "18px"}}>
                  {second.questionOption} 
                  <input className="questionInput" type='checkbox'
                    defaultChecked={second.questionAnswer}
                    onChange={() => getAns(second.key)} />
                </label>
              </p>
            )
          })}
          <div className="btn-group" >
            {flag && <button onClick={getPrev} className="btn btn-outline-secondary btn-lg">
              Previos</button>}
            {thisQ.isAswer && <button onClick={getNext} className="btn btn-outline-info btn-lg" style={{minWidth: '100px'}}>{
              quest.length === qi + 1 ? "Result" : "  Next  "}</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageOfQuest;
