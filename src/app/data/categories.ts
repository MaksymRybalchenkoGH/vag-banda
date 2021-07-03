import {DiagnosticsDescription} from './category-description/diagnostics'
import {TirDescription} from './category-description/tir'
import {ChassisDescription} from './category-description/chassis'
import {EngineDescription} from './category-description/engine'
import {ConditioningDescription} from './category-description/conditioning'
import {GearsDescription} from './category-description/gears'
import {ElectronicsDescription} from './category-description/electronics'
import {AlarmsDescription} from './category-description/alarms'

export enum CategoryEnum {
  diagnostics = 'diagnostics',
  electronics = 'electronics',
  alarms = 'alarms',
  tir = 'tir',
  conditioning = 'conditioning',
  engine = 'engine',
  chassis = 'chassis',
  gears = 'gears'
}
export interface Category {
  // сущность КАТЕГОРИЯ
  id: CategoryEnum
  title: string // назаниие
  description: CategoryDescription // ОПИСАНИЕ
  mainImage: string // картинка на странице
  cardImage: string // картинка на карточке
  isPopular: boolean // популярная категория (а будут еще "непопулярные"?)
}
export interface CategoryDescription {
  // сущность ОПИСАНИЕ
  main: string // основной текст описания
  details: string[] // список уточнений для этого описания
  additional: string // дополнительное описание, идет после списка уточнений
}
// Пример ниже 'Ремонт двигателя'

export const Categories: Category[] = [
  {
    id: CategoryEnum.alarms,
    title: 'Сигнализации, противоугонные системы',
    description: {
      main: AlarmsDescription,
      additional: '',
      details: []
    },
    mainImage: 'signalizaciya',
    cardImage: '',
    isPopular: true
  },
  {
    id: CategoryEnum.diagnostics,
    title: 'Комплексная диагностика',
    description: {
      main: DiagnosticsDescription,
      additional: '',
      details: []
    },
    mainImage: 'diagnostika',
    cardImage: '',
    isPopular: true
  },
  {
    id: CategoryEnum.electronics,
    title: 'Электроника, прошивка ЭБУ, дополнительное оборудование',
    description: {
      main: ElectronicsDescription,
      additional: '',
      details: []
    },
    mainImage: 'electronica',
    cardImage: '',
    isPopular: true
  },
  {
    id: CategoryEnum.tir,
    title: 'Замена технических жидкостей, ТО',
    description: {
      main: TirDescription,
      additional: '',
      details: []
    },
    mainImage: 'to',
    cardImage: '',
    isPopular: true
  },
  {
    id: CategoryEnum.conditioning,
    title: 'Система кондиционирования',
    description: {
      main: ConditioningDescription,
      additional: '',
      details: []
    },
    cardImage: '',
    mainImage: 'kondicionera',
    isPopular: true
  },
  {
    id: CategoryEnum.engine,
    title: 'Ремонт двигателя',
    description: {
      main: EngineDescription,
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
    id: CategoryEnum.chassis,
    title: 'Ремонт ходовой',
    description: {
      main: ChassisDescription,
      additional: '',
      details: []
    },
    cardImage: '',
    mainImage: 'hodovaya',
    isPopular: true
  },
  {
    id: CategoryEnum.gears,
    title: 'Ремонт КПП, АКПП, DSG',
    description: {
      main: GearsDescription,
      additional: '',
      details: []
    },
    cardImage: '',
    mainImage: 'korobka',
    isPopular: true
  }
]
