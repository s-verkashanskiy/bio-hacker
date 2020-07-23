import { ANSWERQUEST } from '../actions/action-types';
const initialState = [
  
];
  



export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWERQUEST:
      return action.newState;
    default:
      return state;
  }
};

// {
//   questionIndex: 0,
//   image: "https://static9.depositphotos.com/1315253/1105/i/450/depositphotos_11057241-stock-photo-spring-meadow-with-cottage.jpg",
//   questionText: 'Вы выросли:',
//   type: 'radio',
//   isAnswer: false,
//   data: [
//     {
//       key: 0,
//       questionOption: 'В большом городе',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'В небольшом городе',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'В сельской местности',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 1,
//   questionText: 'Ваш пол:',
//   type: 'radio',
//   isAnswer: false,
//   image: "https://aif-s3.aif.ru/images/006/882/c850f70632e2b6ffbd4f03514c490b5d.jpg",
//   data: [
//     {
//       key: 0,
//       questionOption: 'Мужской',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'Женский',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 2,
//   questionText: 'Ваш возраст',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://image1.thematicnews.com/uploads/images/00/00/40/2017/04/21/b24a4cf7c6.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'до 18',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: '18-35',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'старше 35',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 3,
//   questionText: 'Ваше представление о здоровом образе жизни:',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://www.12stom.by/images/zozh.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'это здорово',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'можно обойтись без него',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'иногда следует его соблюдать',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'не вижу смысла в его ведении',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 4,
//   questionText: 'Как вы считаете, зачем нужен ЗОЖ?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrjs7KxJgRUdP2qFW_G054phl-Kg9myW_jCQ&usqp=CAU',
//   data: [
//     {
//       key: 0,
//       questionOption: 'это помогает мне в учебе/работе',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'это помогает мне чувствовать себя в "форме"',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'для поддержания здоровья',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'затрудняюсь ответить',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 5,
//   questionText: 'Курите ли вы или курили раньше?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://astv.ru/content/NewsImage/3c/f3/3cf3ae8e-19dc-41e7-959a-4e73d4b2e5ec_1.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'да',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'нет',
//       questionAnswer: false,
//     },
//   ]
// },
// {
//   questionIndex: 6,
//   questionText: 'Как часто вы употребляете алкоголь?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://www.ferra.ru/thumb/750x0/filters:quality(75)/imgs/2020/03/23/06/3832146/09a496a0a11d293b4b6f42720ce56cacd7226005.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'каждый день',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'раз в неделю',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'раз в месяц',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'не употребляю алкоголь',
//       questionAnswer: false,
//     },
//   ],
// },
// {
//   questionIndex: 7,
//   questionText: 'Принимаете ли вы какие либо наркотические средства или принимали раньше?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://shegarcrb.ru/files/k-kakim-izmeneniyam-privodyat-sinteticheskie-narkotiki.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'нет, никогда',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'да, довольно часто',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'иногда',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 8,
//   questionText: 'Как вы проводите свободное время?',
//   type: 'checkbox',
//   isAnswer: false,
//   image: 'https://lh3.googleusercontent.com/proxy/xaapXt9ryRYj0Zoitl1I38GbvxVFeXnwSaJdpqP_ufziBavu1Tz2SU-5dm8T-ne8mt_clRrpWabSBKIhxBplRPayLas3XikosCasOTUSBT2n7qawRnQ_yWVgOXEzD07E-qwPNao',
//   data: [
//     {
//       key: 0,
//       questionOption: 'смотрю телевизор/играю в компьютерные игры',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'общаюсь с друзьями и родными',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'занимаюсь спортом',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'выбираюсь на природу',
//       questionAnswer: false,
//     },
//     {
//       key: 4,
//       questionOption: 'сплю',
//       questionAnswer: false,
//     },
//     {
//       key: 5,
//       questionOption: 'читаю',
//       questionAnswer: false,
//     },
//     {
//       key: 6,
//       questionOption: 'занимаюсь рукоделием',
//       questionAnswer: false,
//     },
//     {
//       key: 7,
//       questionOption: 'занимаюсь домашними делами',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 9,
//   questionText: 'Правильно ли вы питаетесь?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://bigpicture.ru/wp-content/uploads/2019/06/6-3-800x533.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'да, всегда',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'нет, к сожалению не получается',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'нет, не вижу в этом никакого смысла',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 10,
//   questionText: 'Как часто вы употребляете фаст фуд?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://vestirama.ru/assets/templates/images/photo/649fa319da90757a86eb5871c80ed9a0.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'раз в день точо',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'раз в месяц',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'очень редко',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'никогда',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 11,
//   questionText: 'Как часто вы делаете утреннюю зарядку?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://lh3.googleusercontent.com/proxy/gW04F4OX4Qg3V_h9sMRg2MqIVUMuDGjgXoKPGZ5rxw5jHxwnI2lKQ5mwEVvU2XbEWoO55cOrEoERm81rlcrsr7Wpz_WN2ecVHFyCgKJHlcWY067KWtzWy7DtwCS9Nmm-mGMoDmIvA3hCjblyHA',
//   data: [
//     {
//       key: 0,
//       questionOption: 'каждый день',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'раз в два дня',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'никогда',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'что это такое?',
//       questionAnswer: false,
//     }
//   ]
// },
// {
//   questionIndex: 12,
//   questionText: 'Занимались ли вы когда-нибудь каким-либо видом спорта, посещали спортивную секци?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://rebenokvsporte.ru/wp-content/uploads/2018/11/Skalolazanie.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'да',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'нет',
//       questionAnswer: false,
//     },
//   ]
// },
// {
//   questionIndex: 13,
//   questionText: 'Когда в последний раз вы были в спортивном зале?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://ddxfitness.ru/upload/iblock/d9e/d9e7d8d1492f1c310070fbccb105776a.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'вчера',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'неделю назад',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'месяц назад',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'не помню',
//       questionAnswer: false,
//     },
//   ]
// },
// {
//   questionIndex: 14,
//   questionText: 'Можете ли вы себе позволить посещение различных спортивных секций, залов, бассейна и т.д.?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://bzns.media/upload/resize_cache/iblock/578/616_10000_1/57838ad17ab05d1a432a5365b088818c.jpg?3511751534577445',
//   data: [
//     {
//       key: 0,
//       questionOption: 'могу, регулярно посещаю',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'могу, но не вижу в этом смысла',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'не могу, т.к. нет времени',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'не могу, т.к. не хватает денег',
//       questionAnswer: false,
//     },
//   ]
// },
// {
//   questionIndex: 14,
//   questionText: 'Какое количество денег вы тратите на приобретение витаминов, полезных продуктов питания (фрукты, овощи и т.д.)?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://image.freepik.com/free-photo/_79783-134.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: '70%-100% от бюджета',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: '50%-60% от бюджета',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: '30%-40% от бюджета',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: '0%-20% от бюджета',
//       questionAnswer: false,
//     },
//   ]
// },
// {
//   questionIndex: 14,
//   questionText: 'Для того чтобы чувствовать себя в форме, вам необходимо?',
//   type: 'radio',
//   isAnswer: false,
//   image: 'https://www.vitamarg.com/images/img5/sekrety-schastlivogo-cheloveka.jpg',
//   data: [
//     {
//       key: 0,
//       questionOption: 'соблюдение режима дня',
//       questionAnswer: false,
//     },
//     {
//       key: 1,
//       questionOption: 'занятие спортом',
//       questionAnswer: false,
//     },
//     {
//       key: 2,
//       questionOption: 'употребление алкоголя/наркотических средств',
//       questionAnswer: false,
//     },
//     {
//       key: 3,
//       questionOption: 'литература',
//       questionAnswer: false,
//     },
//   ]
// },
