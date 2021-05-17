export interface CarBrandModel {
  brand: CarBrandEnum
  title: string
}
export enum CarBrandEnum  {
  toyota = 'toyota',
  renault = 'renault',
  honda = 'honda',
  vag = 'vag'
}

export const CarsList: CarBrandModel[] = [
  {
    brand: CarBrandEnum.honda,
    title: CarBrandEnum.honda
  },
  {
    brand: CarBrandEnum.toyota,
    title: CarBrandEnum.toyota
  },
  {
    brand: CarBrandEnum.renault,
    title: CarBrandEnum.renault
  },
  {
    brand: CarBrandEnum.vag,
    title: 'Концерн VAG'
  }
]
