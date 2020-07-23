import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from 'react-redux';
import PageOfQuest from '../PageOfQuest';
import './QuestMain.module.scss'

function QuestMain(props) {
  const allData = useSelector(state => state.quest);
  const history = useHistory();
  const [qi,setQI] = useState(0);
  
  function getPrev() {
    setQI(qi - 1);
  }
  function getNext() {
    if (allData.length > qi + 1) {
      setQI(qi + 1);
    }
  }

  return (
    <div className="container-fluid">
      <TransitionGroup>
        <CSSTransition
          timeout={400}
          classNames="slide"
          key={qi}
        >
          <PageOfQuest
            qi={qi}
            getNext={getNext}
            getPrev={getPrev}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default QuestMain;
