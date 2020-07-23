import React from 'react';
import StepperH from 'react-stepper-horizontal';
import { useSelector, useDispatch } from 'react-redux';
import SimpleTest from '../components/Stepper/SimpleTest';
import Program from '../components/Stepper/Program';
import Payment from '../components/Stepper/Payment';
import Settings from '../components/Stepper/Settings';
import { stepPlus, stepMinus} from '../redux/actions/stepper';


export default function Stepper() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.step);
  
  return (
    <div>
      <StepperH 
      steps={[
        { title: 'Чек-Лист' },
        { title: 'Описание программы' },
        { title: 'Оплата' },
        { title: 'Настройка программы' }
      ]} 
      activeStep={step} 
      completeTitleColor='#757575'
      completeColor='#00006f'
      />
      <button onClick={() => dispatch(stepMinus())}>Prev</button>
      <button onClick={() => dispatch(stepPlus())}>Next</button>
      {step===0 && <SimpleTest/>}
      {step===1 && <Program/>}
      {step===2 && <Payment/>}
      {step===3 && <Settings/>}
    </div>
  );

}
