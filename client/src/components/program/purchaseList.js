import React from 'react';
import styles from './purchaseList.module.css';

// что в программе 
export default function () {
  return (
      <>
        <div>

          <div className="card-header">
            Вам будет доставлен следующий набор на месяц:
            {/* <h5 className="card-title mt-4 d-flex justify-content-center"> Список добавок/витаминов подобранных для вас: </h5> */}
          </div>

          <div className="card-body">
            <div className="card-text">
              <ol className={styles.ol}>
                <li className={styles.li}>D3 2000Me</li>
                <li className={styles.li}>Q10</li>
                <li className={styles.li}>Железо</li>
                <li className={styles.li}>B12 </li>
              </ol>
            </div>
          </div>
        </div>
      </>

  )
}
