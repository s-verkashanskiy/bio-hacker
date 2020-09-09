import React from 'react';
import { setPhone } from '../../redux/actions/program'; 
import { useDispatch, useSelector } from 'react-redux';


export default function() {
  let showMessagePhone = true;
  const phone = useSelector(state => state.program.phone);
  const dispatch = useDispatch();

  function savePhone(value) {
    dispatch(setPhone(value));
  }

  function checkPhone(phoneNum) {
    const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gm;
    if (phoneNum.match(reg)) showMessagePhone = true;
    else showMessagePhone = false;
    return;
  }
  // onClick={()=>savePhone(phone)} onFocusOut={()=>checkPhone(phone)}

  return (
  <>
    <div className="card-header">
            Укажите номер телефона:
    </div>
    <div className="card-body">
      <div className="col-5">
        <label className="sr-only" for="inlineFormInputGroup">Телефон</label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">+7</div>
          </div>
           <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="999 1234567" value={phone}/>
          </div>
        {/* { showMessagePhone &&
          <p className="card-text">
           <small className="text-muted">
             Введите ваш номер телефона в формате: +7 9991234567 
           </small>
        </p>} */}
      </div>
              
    </div>

  </>
  )
}

