import React from 'react';
import styles from './programList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { stepPlus } from '../../redux/actions/stepper'; 
import { setPrice } from '../../redux/actions/program';


//  action перед покупкой пррограммы
export default function () {
  const dispatch = useDispatch();
  const program = useSelector(state => state.program);
  function next(price) {
    dispatch(setPrice(price));
    dispatch(stepPlus());
  }
  return (
    <>
      <div className>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h4 className="display-6">Осталось выбрать опции:</h4>
          <p className="lead">
            Подберите для себя оптимальный набор опций, который соответствует
            вашим возможностям.
          </p>
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">
            {/* первая карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Базовый пакет</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                  {program.baseCost}
                  <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Календарь программы</li>
                  <li>Уведомления</li>
                  <li>Просмотр достижений</li>
                  <li> &nbsp;</li>
                  <li> &nbsp;</li>
                </ul>
                <button type="button" className="green btn btn-lg btn-block btn-outline-success" onClick={() => next(program.baseCost)}>
                  Начать
                </button>
              </div>
            </div>

            {/* вторая карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Стандартный пакет</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                  {program.baseCost + 3000}
                  <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Календарь программы</li>
                  <li>Уведомления</li>
                  <li>Просмотр достижений</li>
                  <li className="list-group-item-success">Чат поддержки</li>
                  <li> &nbsp; </li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-success" onClick={() => next(program.baseCost + 3000)}>
                  Начать
                </button>
              </div>
            </div>

            {/* третья карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Полный пакет</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                  {program.baseCost + 7000}
                  <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Календарь программы</li>
                  <li>Уведомления</li>
                  <li>Просмотр достижений</li>
                  <li className="list-group-item-success">Чат поддержки</li>
                  <li className="list-group-item-success">
                    1 личная консультация
                  </li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-success" onClick={() => next(program.baseCost + 7000)}>
                  Начать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
