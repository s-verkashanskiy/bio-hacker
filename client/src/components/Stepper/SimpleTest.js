import React, { useState } from 'react';
// import './SimpleTest.module.css';
import { useDispatch } from 'react-redux';
import { stepPlus } from '../../redux/actions/stepper';

function SimpleTest() {
  const dispatch = useDispatch();
  const [data, setData] = useState([
    {
      key: 0,
      question: 'Ваш пол:',
      isAnswer: false,
      options: [
        {
          text: 'Мужской',
          isChecked: false,
          index: 0,
        },
        {
          text: 'Женский',
          isChecked: false,
          index: 1,
        },
      ],
    },
    {
      key: 1,
      question: 'Ваш возраст:',
      isAnswer: false,
      options: [
        {
          text: 'Меньше 20',
          isChecked: false,
          index: 0,
        },
        {
          text: 'от 20 до 35',
          isChecked: false,
          index: 1,
        },
        {
          text: 'от 36 до 65',
          isChecked: false,
          index: 2,
        },
        {
          text: 'больше 65',
          isChecked: false,
          index: 3,
        },
      ],
    },
    {
      key: 2,
      question: 'Ваш образ жизни',
      isAnswer: false,
      options: [
        {
          text: 'Активный',
          isChecked: false,
          index: 0,
        },
        {
          text: 'Мало активный',
          isChecked: false,
          index: 1,
        },
        {
          text: 'Сидячий',
          isChecked: false,
          index: 2,
        },
      ],
    },
    {
      key: 3,
      question: 'Ваш образ питания:',
      isAnswer: false,
      options: [
        {
          text: 'Всегда правильно питаюсь',
          isChecked: false,
          index: 0,
        },
        {
          text: 'Стараюсь правильно питаться',
          isChecked: false,
          index: 1,
        },
        {
          text: 'Питаюсь без ограничений',
          isChecked: false,
          index: 2,
        },
      ],
    },
    {
      key: 4,
      question: 'Занимаетесь ли Вы спортом:',
      isAnswer: false,
      options: [
        {
          text: 'Постоянно',
          isChecked: false,
          index: 0,
        },
        {
          text: 'Иногда/Редко',
          isChecked: false,
          index: 1,
        },
        {
          text: 'Никогда',
          isChecked: false,
          index: 2,
        },
      ],
    },
    {
      key: 5,
      question: 'Какое количество денег Вы тратите на здоровье:',
      isAnswer: false,
      options: [
        {
          text: 'Больше 50% от бюджета',
          isChecked: false,
          index: 0,
        },
        {
          text: 'От 50% до 20% от бюджета',
          isChecked: false,
          index: 1,
        },
        {
          text: 'Меньше 20% от бюджета',
          isChecked: false,
          index: 2,
        },
      ],
    },
  ]);
  const [flag, setFlag] = useState(false);
  function checkRadio(key, index) {
    const newOptions = data[key].options.map((el) => {
      return el.index !== index
        ? { ...el, isChecked: false }
        : { ...el, isChecked: true };
    });
    const newData = data.map((el) => {
      return el.key !== key
        ? el
        : { ...el, options: newOptions, isAnswer: true };
    });
    setData(newData);
    const check = newData.reduce((acc, cur) => {
      return acc + cur.isAnswer;
    }, 0);
    if (check === data.length) {
      setFlag(true);
    }
  }

  return (
    <div className="container d-flex flex-column">
      <div className="container d-flex flex-column">
        <h5 className="text-center mt-4 mb-5">
          Ответьте пожалуста на несколько вопросов чтобы мы могли подобрать для
          вас программу
        </h5>
        {data.length &&
          data.map((el) => {
            return (
              <div
                className="btn-group-vertical"
                role="group"
                data-toggle="buttons"
                key={el.key}
              >
                <p>
                  <strong>{el.question}</strong>
                </p>
                {el.options.length &&
                  el.options.map((one) => {
                    return (
                      <label
                        className="btn btn btn-outline-success"
                        ket={one.index}
                      >
                        <input
                          type="radio"
                          checked={one.isChecked}
                          onClick={() => checkRadio(el.key, one.index)}
                        />{' '}
                        {one.text}
                      </label>
                    );
                  })}
                <br />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-center mb-5">
        {flag && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => dispatch(stepPlus())}
          >
            Подобрать программу
          </button>
        )}
      </div>
    </div>
  );
}

export default SimpleTest;
