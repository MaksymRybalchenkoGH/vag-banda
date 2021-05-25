// Categories
// 1. Комплексная диагностика
// 2. Электроника, прошивка ЭБУ, дополнительное оборудование
// 3. Сигнализации, противоугонные системы
// 4. Замена технических жидкостей, ТО
// 5. Система кондиционирования
// 6. Ремонт двигателя
// 7. Ремонт ходовой
// 8. Ремонт КПП, АКПП, DSG

export interface Category { // сущность КАТЕГОРИЯ
  title: string // назаниие
  description: CategoryDescription // ОПИСАНИЕ
  mainImage: string // картинка на странице
  cardImage: string  // картинка на карточке
  isPopular: boolean // популярная категория (а будут еще "непопулярные"?)
}
export interface CategoryDescription { // сущность ОПИСАНИЕ
  main: string // основной текст описания
  details: string[] // список уточнений для этого описания
  additional: string // дополнительное описание, идет после списка уточнений
}
// Пример ниже 'Ремонт двигателя'

export const Categories: Category[] = [
  {
    title: 'Сигнализации, противоугонные системы',
    description: {
      main: 'Количество угонов авто в Киеве просто зашкаливает. Арсенал оборудования угонщиков самый современный: удочки, считыватели, скрытые антенны и тому подобные технические средства. Соответственно и защищать автомобиль необходимо согласно последним технологическим новинкам. Огромную роль играет как сам охранный комплекс (Banda Service является поставщиком таких брендов как Pandora и Prizrak), так и способ его установки. Официальные станции делают это по типовой технической карте, что значительно понижает эффективность сигнализации, а так называемые студии антиугона необоснованно накручивают ценники на дополнительных спец защитах. Так же, не все автоэлектрики могут правильно установить и настроить охранный комплекс. Нехватка опыта, отсутствие специального оборудования или незнание технологии установки – все это не должно лазейкой для угона вашего автомобиля. Мастера Banda Service делают скрытные установки в самых неожиданных местах автомобиля, что значительно повышает безопасность авто.',
      additional: '',
      details: []
    },
    mainImage: 'signalizaciya',
    cardImage: '',
    isPopular: true
  },
  {
    title: 'Комплексная диагностика',
    description: {
      main: 'От правильной работы узлов и агрегатов автомобиля зависит комфорт и безопасность всех участников дорожного движения. Если ломается один из механизмов, то это может вызвать цепную реакцию, которая приведет к серьезным неисправностям и поломкам. По этой причине, при каждом постороннем звуке ходовой, или не привычном ощущении при рулёжке, рекомендуем не затягивать с диагностикой и обнаружением неисправности. Пройти комплексную диагностику автомобиля, или отдельных механизмов в Киеве можно на Banda Service. Комплексная диагностика автомобилей - это проверка авто на предмет работоспособности, исправности, правильности функционирования различных механизмов машины. Сюда входит проверка ходовой части, компьютерная диагностика, визуальный осмотр подкапотного пространства. Своевременно обнаруженные неисправности помогут сэкономить как время, так и деньги в случае необходимости ремонтных работ.',
      additional: '',
      details: []
    },
    mainImage: 'diagnostika',
    cardImage: '',
    isPopular: true
  },
  {
    title: 'Электроника, прошивка ЭБУ, дополнительное оборудование',
    description: {
      main: 'Электрооборудование автомобиля с каждым новым поколением всё сложнее и сложнее. Только при использовании современного диагностического оборудования можно получить желаемый результат. Прошивка блоков управления автомобиля еще более технологически сложный и кропотливый технологический процесс. Установка дополнительного оборудования (парктроников/камеры заднего вида, или системы противоугонной безопасности (сигнализации)) - это то, чем можно значительно повысить комфорт от эксплуатации автомобиля. Рекомендуем довериться квалифицированным профессионалам из Banda Service и прибегнуть к дооборудованию вашего автомобиля. Далеко не все автоэлектрики могут выполнить правильно такие работы. Нехватка опыта, отсутствие специального оборудования или незнание технологии установки – все это не должно вставать на пути правильной работы дополнительного оборудования вашего автомобиля.',
      additional: '',
      details: []
    },
    mainImage: 'electronica',
    cardImage: '',
    isPopular: true
  },
  {
    title: 'Замена технических жидкостей, ТО',
    description: {
      main: 'Banda Service в Киеве на Софиевской Борщаговке оказывает услуги по замене технических жидкостей всех видов, с использованием высококачественных расходников, материалов и запчастей. Своевременная и качественная замена масла и фильтров, продлевает срок службы двигателя или коробки передач, а также других систем автомобиля. Квалифицированные специалисты Banda Service в Киеве имеют большой опыт по замене технических жидкостей и фильтров и помогут с заменых технических жидкостей в любом агрегате вашего автомобиля.',
      additional: '',
      details: []
    },
    mainImage: 'to',
    cardImage: '',
    isPopular: true
  },
  {
    title: 'Система кондиционирования',
    description: {
      main: 'Сегодня кондиционер в автомобиле - это не роскошь, а необходимость. Он не только повышает уровень комфорта водителя и пассажиров, но и поддерживает концентрацию при езде, что в свою очередь, увеличивает безопасность при вождении автомобиля. Антибактериальная чистка, заправка, дозаправка, диагностика авто кондиционера – это то с чем на отлично справляются квалифицированные специалисты Banda Service.',
      additional: '',
      details: []
    },
    cardImage: '',
    mainImage: 'kondicionera',
    isPopular: true,
},
  {
    title: 'Ремонт двигателя',
    description: {
      main:
        'Двигатель – один из важнейших узлов автомобиля. Диагностика двигателя необходима, если вы заметили какие-либо неполадки в его работе. Это можно определить по следующим признакам',
      additional:
        'Очень часто диагностику необходимо проводить со вскрытием крышки головки блока цилиндров. Здесь без профессионалов не обойтись. Добиться качественного ремонта можно только при использовании точного оборудования, правильных технических карт и умелых рук. В автосервисе Banda Service работают мотористы с огромным опытом, которые перебрали и откапиталили не один двигатель.',
      details: [
        'мощность двигателя заметно снизилась',
        'при нажатии на педаль газа ощущаются провалы',
        'на прогрев двигателя уходит гораздо больше времени, чем обычно',
        'расход топлива существенно увеличился',
        'двигатель очень плохо запускается или же не заводится вовсе',
        'при работе двигателя слышны постукивания, потрескивания или другие посторонние шумы',
        'выхлопные газы черного или белого цвета',
        'троение или неравномерная работа двигателя'
      ]
    },
    mainImage: 'dvigatel',
    cardImage: '',
    isPopular: true
  },
  {
    title: 'Ремонт ходовой',
    description: {
      main: 'Ходовая часть влияет на безопасность водителя и других участников дорожного движения. Только при правильной работе всех частей подвески и ходовой можно получить комфорт от вождения и ожидаемый результат при управлении автомобиля. Все узлы и агрегаты автомобиля тесно связаны между собой, ходовая часть не исключение. При разболтанном сайлентблоке основной удар на себя будет получать рычаг, увеличится нагрузка на шаровую опору. Через пару сотен километров наших дорог и она выйдет из строя. Рекомендуем не затягивать с диагностикой мелких проблем и устранением неисправностей, ведь последующий ремонт может быть более продолжительным и капиталозатратным. Мастера автосервиса Banda Service, имеют тот необходимый опыт в диагностике и ремонте ходовой вашего автомобиля, при использовании правильно подобранных запчастей можно значительно сэкономить на их приобретении без потери качества по сравнению с оригинальными аналогами.',
      additional: '',
      details: []
    },
    cardImage: '',
    mainImage: 'hodovaya',
    isPopular: true,
  },
  {
    title: 'Ремонт КПП, АКПП, DSG',
    description: {
      main: 'Коробка переключения передач – тёмный лес для множества автомобилистов. Современные автоматические КПП не всегда могут похвастать своей надёжностью. Регламентной замены масла в КПП часто недостаточно для обеспечения длительного строка эксплуатации коробки, особенно если получать от машины каждый день немного больше чем резвый разгон. А если добавить и постоянные пробки и дергания по городу, то этому агрегату автомобиля необходимо уделять особое внимание. Диагностика компьютерная часто может показать приближающиеся проблемы и предотвратить более серьёзную поломку КПП. Полная или частичная замена жидкости АКПП с заменой фильтра КПП — важная процедура для правильной эксплуатации машины. Если не менять вовремя жидкость, коробка передач может начать работать неисправно, передача будет срабатывать сама по себе или её будет дергать. Данная процедура занимает довольно продолжительный промежуток времени. Мы рекомендуем довериться квалифицированным профессионалам из Banda Service. Только при своевременной замене и использовании правильно подобранного масла с расходниками можно обеспечить длительный строк эксплуатации данного узла.',
      additional: '',
      details: []
    },
    cardImage: '',
    mainImage: 'korobka',
    isPopular: true,
  }
]
