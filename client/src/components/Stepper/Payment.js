import React from 'react';
import styles from './payment.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { stepPlus } from '../../redux/actions/stepper';

export default function Payment() {
  const price = useSelector(state => state.program.price);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  async function next() {
    const response = await fetch('/api/flag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: auth.id}),
    });
    if (response.status === 200) {
      dispatch(stepPlus());
    }
  }
  //https://codepen.io/llgruff/pen/JdyJWR
  return (
    <>

      <div className="container">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Оплата</h4>
        </div>
      </div>

      <div className="card">
      <div className={`${styles.new_body}`}>

        <div className="card-header">
          Детали платежа
          <img className="img-responsive pull-right" alt="cards" src="http://i76.imgup.net/accepted_c22e0.png"/>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="cardNumber">НОМЕР КАРТЫ</label>
                  <input
                    type="tel"
                    // className={`${styles.form_control}`}
                    name="cardNumber"
                    placeholder="Номер карты"
                    autoComplete="cc-number"
                    required autoFocus
                  />
            </div>
          </div>

            <div className="row">
              <div className="col-md-3 mb-3">
                        <label htmlFor="cardExpiry">До</label>
                        <input
                                    type="tel"
                                    // className={`${styles.form_control}`}
                                    name="cardExpiry"
                                    placeholder="ММ / ГГ"
                                    autoComplete="cc-exp"
                                    required
                                    />
              </div>

              <div className="col-md-3 mb-3">
                        <label htmlFor="cardCVC">CVС</label>
                        <input
                                    type="password"
                                    // className={`${styles.form_control}`}
                                    name="cardCVC"
                                    placeholder="CVC"
                                    autoComplete="cc-csc"
                                    required
                                    />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button className="btn btn-success btn-lg btn-block text-center" type="submit" onClick={next}>Оплатить {price} руб</button>
              </div>
            </div>


        </div>
      </div>
    </div>
  </>
  )
} 
