const TuningWorkshopAddress = 'ул.Киевская\u00A08а'
const TuningWorkshopDistrict = 'Софиеская\u00A0борщаговка'
const TuningWorkshopMapUrl = 'https://www.google.com/maps/place/Banda+Car+Service/@50.4089658,30.37802,17z/data=!4m13!1m7!3m6!1s0x40d4cbc156d850eb:0x8fe944006c80de24!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgOCwg0JrQuNC10LIsIDA4MTMx!3b1!8m2!3d50.409666!4d30.381059!3m4!1s0x40d4cb4eef11baa3:0x14bfe1fa124a0fdf!8m2!3d50.4089658!4d30.380214'
const VagAddress = 'ул.\u00A0Стеценка\u00A019/91'
const VagDistrict = 'Киев'
const VagMapUrl = 'https://www.google.com/maps/place/%D0%A1%D0%A2%D0%9E+VAG+Banda/@50.4850592,30.396161,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cdd615da5b51:0x34b39901ad473bee!8m2!3d50.4850654!4d30.3983637'



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
  locationUrl: TuningWorkshopMapUrl,
  mail: 'st.ivan.al@gmail.com',
  phone: '+38 073 110 41 01',
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
    locationUrl: VagMapUrl,
    mail: 'pochta.ot.vaga@gmail.com',
    phone: '+38 050 470 70 75', // '+38 098 470 70 75'
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
