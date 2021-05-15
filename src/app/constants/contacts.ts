const TuningWorkshopAddress = 'ул.Киевская\u00A08а'
const TuningWorkshopDistrict = 'Софиеская\u00A0борщаговка'
const VagAddress = 'ул.\u00A0Стеценка\u00A019/91'
const VagDistrict = 'Киев'



export interface SocialNetModal {
  icon: string
  url: string
}

export interface ContactModel {
  address: string
  district: string
  locationUrl: string
  mail: string
  phone: string
  socials: SocialNetModal[]
}

export const MainContacts: ContactModel = {
  address: TuningWorkshopAddress,
  district: TuningWorkshopDistrict,
  locationUrl: `http://maps.google.com/?q=${TuningWorkshopDistrict}, ${TuningWorkshopAddress}`,
  mail: 'st.ivan.al@gmail.com',
  phone: '+380731104101',
  socials: [
    {
      icon: 'facebook',
      url: decodeURIComponent('https://facebook.com/vagbanda.com.ua/')
    },
    {
      icon: 'instagram',
      url: decodeURIComponent('https://instagram.com/vagbanda_kiev/')
    }
  ]
}

export const ContactsList: ContactModel[] = [
  MainContacts,
  {
    address: VagAddress,
    district: VagDistrict,
    locationUrl: `http://maps.google.com/?q=${VagDistrict}, ${VagAddress}`,
    mail: 'pochta.ot.vaga@gmail.com',
    phone: '+380731104101',
    socials: [
      {
        icon: 'facebook',
        url: decodeURIComponent('https://facebook.com/vagbanda.com.ua/')
      },
      {
        icon: 'instagram',
        url: decodeURIComponent('https://instagram.com/vagbanda_kiev/')
      }
    ]
  }
]
