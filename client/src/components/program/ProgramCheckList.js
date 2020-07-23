import React from 'react';
import styles from './programList.module.css';

// что в программе
export default function () {
  return (
    <>
      <div>
        <h5 className="card-title text-center ">Краткое описание программы:</h5>
        <p>
          На курсе вы узнаете, насколько это важно защищать себя от токсинов и
          как это делать. По оценкам ученых за последние 100 лет уровень
          интоксикации почвы, воды, продуктов питания и соответственно человека
          вырос в 400 раз! Интоксикация является причиной многих серьезных
          заболеваний и гормональных нарушений.
        </p>
        <h5 className="card-title mt-4 d-flex justify-content-center">
          План программы:
        </h5>
        <ol className={styles.ol}>
          <li className={styles.li}>
            Вы определите Ваши источники интоксикации организма
          </li>
          <li className={styles.li}>
            Вы поймете, какие симптомы интоксикации Вы ощущаете каждый день
          </li>
          <li className={styles.li}>
            Какие органы отвечают за детокс в нашем организме
          </li>
          <li className={styles.li}>
            Что происходит с нашим организмом без детокса
          </li>
          <li className={styles.li}>
            Вы получите схему идеального детокса и пройдете его вместе с нами
          </li>
          <li className={styles.li}>Вы научитесь любить себя и свое тело</li>
        </ol>
      </div>
    </>
  );
}
