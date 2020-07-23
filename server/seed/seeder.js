import '../dotenv.js';
import '../middleware/db-connect.js';
import Program from '../models/program.js';
import Course from '../models/course.js';

(async () => {
  const programList = [
    // new Program(
    //   {
    //     title: 'Detox Middle Level',
    //     description: 'Позволяет нормализовать минеральный баланс, немножко похудеть. Позволяет закрепить и развить результат. Позволяет значительно улучшить самочувствие и энергию',
    //     duration: 20,
    //     baseCost: 50000,
    //     items: [
    //       {
    //         title: 'Multi-XL',
    //         description: 'Мультивитаминный комплекс',
    //         brand: 'Swiss',
    //         dosage: {
    //           quantityOneTime: 1,
    //           medicationPerDay: 3,
    //         },
    //         linkToCart: 'http://alex.shop/1.html',
    //       },
    //       {
    //         title: 'BioProtect комплекс №1',
    //         description: 'Восстанавливающий комплекс',
    //         brand: 'Swiss',
    //         dosage: {
    //           quantityOneTime: 2,
    //           medicationPerDay: -0.1,
    //         },
    //         linkToCart: 'http://alex.shop/2.html',
    //       },
    //       {
    //         title: 'Yaodjity комплекс №8',
    //         description: 'Экстракт женьшеняБ элеутерококка и зеленого чая',
    //         brand: 'Japan',
    //         dosage: {
    //           quantityOneTime: 2,
    //           medicationPerDay: -1,
    //         },
    //         linkToCart: 'http://alex.shop/3.html',
    //       },
    //       {
    //         title: 'Solus Premium комплекс №3',
    //         description: 'Коэнзим Q10',
    //         brand: 'Germany',
    //         dosage: {
    //           quantityOneTime: 1,
    //           medicationPerDay: 2,
    //         },
    //         linkToCart: 'http://alex.shop/4.html',
    //       },
    //       {
    //         title: 'комплекс #QW',
    //         description: 'Очистительный комплекс',
    //         brand: 'USA',
    //         dosage: {
    //           quantityOneTime: 1,
    //           medicationPerDay: 1,
    //         },
    //         linkToCart: 'http://alex.shop/5.html',
    //       },
    //       {
    //         title: 'Nature Shine комплекс №8',
    //         description: 'Селен натуральный',
    //         brand: 'Great Britan',
    //         dosage: {
    //           quantityOneTime: 3,
    //           medicationPerDay: 0.1,
    //         },
    //         linkToCart: 'http://alex.shop/6.html',
    //       },
    //     ],
    //   },
    // ),

  ];
  programList.push(
    {
      title: 'Detox Middle Level',
      description: 'Позволяет нормализовать минеральный баланс, немножко похудеть. Позволяет закрепить и развить результат. Позволяет значительно улучшить самочувствие и энергию',
      duration: 20,
      baseCost: 50000,
      items: [
        {
          title: 'Multi-XL',
          description: 'Мультивитаминный комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 3,
          },
          linkToCart: 'http://alex.shop/21.html',
        },
        {
          title: 'BioProtect комплекс №1',
          description: 'Восстанавливающий комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 2,
            medicationPerDay: -0.1,
          },
          linkToCart: 'http://alex.shop/22.html',
        },
        {
          title: 'Yaodjity комплекс №8',
          description: 'Экстракт женьшеня элеутерококка и зеленого чая',
          brand: 'Japan',
          dosage: {
            quantityOneTime: 2,
            medicationPerDay: -1,
          },
          linkToCart: 'http://alex.shop/23.html',
        },
        {
          title: 'Solus Premium комплекс №3',
          description: 'Коэнзим Q10',
          brand: 'Germany',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 2,
          },
          linkToCart: 'http://alex.shop/24.html',
        },
        {
          title: 'комплекс #QW',
          description: 'Очистительный комплекс',
          brand: 'USA',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 1,
          },
          linkToCart: 'http://alex.shop/25.html',
        },
        {
          title: 'Nature Shine комплекс №8',
          description: 'Селен натуральный',
          brand: 'Great Britan',
          dosage: {
            quantityOneTime: 3,
            medicationPerDay: 0.1,
          },
          linkToCart: 'http://alex.shop/26.html',
        },
      ],
    },
    {
      title: 'Detox for Beginer',
      description: 'Позволяет нормализовать минеральный баланс, немножко похудеть.',
      duration: 10,
      baseCost: 30000,
      items: [
        {
          title: 'Multi-X',
          description: 'Витаминный комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 3,
          },
          linkToCart: 'http://alex.shop/11.html',
        },
        {
          title: 'BioProtect комплекс №1',
          description: 'Восстанавливающий комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 2,
            medicationPerDay: -0.1,
          },
          linkToCart: 'http://alex.shop/12.html',
        },
        {
          title: 'Yaodjity комплекс №8',
          description: 'Органический комплекс для похудения',
          brand: 'Japan',
          dosage: {
            quantityOneTime: 2,
            medicationPerDay: -1,
          },
          linkToCart: 'http://alex.shop/13.html',
        },
        {
          title: 'Solus Premium комплекс №3',
          description: 'Противовоспалительный комплекс',
          brand: 'Germany',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 2,
          },
          linkToCart: 'http://alex.shop/14.html',
        },
        {
          title: 'комплекс #QW',
          description: 'Очистительный комплекс',
          brand: 'USA',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 1,
          },
          linkToCart: 'http://alex.shop/15.html',
        },
        {
          title: 'Protect guts комплекс №5',
          description: 'Антигильминтный комплекс',
          brand: 'Great Britan',
          dosage: {
            quantityOneTime: 3,
            medicationPerDay: 0.1,
          },
          linkToCart: 'http://alex.shop/16.html',
        },
      ],
    },
  );
  await Program.insertMany(programList).catch((error) => console.log(error));

  const coursesList = [];
  programList[0]._id = '5f17f184c380e82577d811e2';
  coursesList.push(
    new Course({
      user: '5f15cefaa01ce63af06abacb',
      program: programList[0]._id,
      date: {
        type: String,
        default: new Date(new Date().getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, ''),
      },
      description: 'тестовый курс для администратора сайта',
      events: await Program.generateEvents(new Date().setHours(0, 0, 0, 0), programList[0]._id),
    }),
  );

  // await Course.insertMany(coursesList).catch((error) => console.log(error));
})();
