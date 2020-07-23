import React from 'react';

function Benefits() {
  return (
    <>
      <h2 className="text-center mb-4 text-success">
        Программы для вашего здоровья
      </h2>
      <div className="card-deck">
        <div className="card">
          <img
            src="./img/nostress-mini.jpg"
            className="card-img-top"
            alt="Антистресс"
          />
          <div className="card-body">
            <h5 className="card-title text-center">Антистресс</h5>
            <p className="card-text">
              Снижение стресса через систему питания, прием витаминов и комплекс
              упражнений
              <br />
              <i> Длительность курса 1 месяц </i>
            </p>
            {/* <a href="#" className="btn btn-outline-success">
              Подробнее
            </a> */}
          </div>
        </div>
        <div className="card">
          <img src="/img/detox.jpg" className="card-img-top" alt="Детокс" />
          <div className="card-body">
            <h5 className="card-title text-center">Детокс</h5>
            <p className="card-text">Очищение организма от токсинов</p>
            <div>
              <i>Длительность курса 3 недели</i>
            </div>
            {/* <a href="#" className="btn btn-outline-success">
              Подробнее
            </a> */}
          </div>
        </div>
        <div className="card">
          <img
            src="/img/vitamins2.jpg"
            className="card-img-top"
            alt="Витаминизация"
          />
          <div className="card-body">
            <h5 className="card-title text-center">Витаминизация</h5>
            <p className="card-text">
              Наполнение организма необходимыми витаминами и минералами
            </p>
            <div>
              <i>Длительность курса 3 недели</i>
            </div>
            {/* <a href="#" className="btn btn-outline-success">
              Подробнее
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
