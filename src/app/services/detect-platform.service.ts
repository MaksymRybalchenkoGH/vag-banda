import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class DetectPlatformService {
  isBrowser: boolean
  isServer: boolean

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId)
    this.isServer = isPlatformServer(this.platformId)
  }
}
