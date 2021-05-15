export interface VehiclePart {
  type: VehicleTypeEnum
  title: string
  description: string
  url?: string
}
export enum VehicleTypeEnum {
  conditioning = 'conditioning',
  chassis = 'chassis',
  diagnostics = 'diagnostics',
  engine = 'engine',
  oil = 'oil',
  transmission = 'transmission'
}
export const VehiclePartsList: VehiclePart[] = [
  {
    type: VehicleTypeEnum.oil,
    title: 'Замена масла',
    description:
      'Масло - жизнено важный элемент работы двигателя. Banda Tuning Workshop позаботится о своевременной замене качественного масла в двигателе.'
  },
  {
    type: VehicleTypeEnum.transmission,
    title: 'Трансмиссия',
    description:
      'Ремонт трансмиссии вашего автомобиля необходимо доверять только профессионалам. Квалифицированные мастера из Banda Tuning Workshop помогут это сделать.'
  },
  {
    type: VehicleTypeEnum.engine,
    title: 'Двигатель',
    description:
      'Один из самых технически сложных элементов автомобиля который нуждается в своевременном обслуживании и технологически правильном ремонте на Banda Tuning Workshop.'
  },
  {
    type: VehicleTypeEnum.chassis,
    title: 'Ходовая часть автомобиля',
    description:
      'Только правильно подобранные и установленные запчасти на Banda Tuning Workshop смогут обеспечить высокие ходовые характеристи автомобиля и обеспечить его безопасную эксплуатацию.'
  },
  {
    type: VehicleTypeEnum.conditioning,
    title: 'Система кондиционирования и охлаждения',
    description:
      'Работа кондиционера зависит от многих факторов. Экспертная проверка на Banda Tuning Workshop всех его компонентов даст ожидаемый результат при длительной работе.'
  },
  {
    type: VehicleTypeEnum.diagnostics,
    title: 'Диагностика',
    description:
      'Профессиональная диагносты с Banda Tuning Workshop при использовании специализированого диагностического оборудования и применением технологических карт обеспечят четкий и качественный ремонт конкретного узла, а не всего автомобиля.'
  }
]
