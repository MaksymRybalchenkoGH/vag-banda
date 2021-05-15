import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GOOGLE_PLACE_ID, GOOGLE_REVIEWS_URL, TG_CHAT_URL } from '../constants/public-api'

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {
  private readonly tgChatUrl = TG_CHAT_URL
  private readonly googleReviewsUrl = GOOGLE_REVIEWS_URL
  private readonly googlePlaceId = GOOGLE_PLACE_ID

  constructor(private http: HttpClient) {
    // console.log('gg', google)
  }

  public sendBndServiceBotMessage(text: string): Observable<any> {
    return this.http.get(this.tgChatUrl + text)
  }

  public getGooglePlaceData(): Observable<any> {
    // todo: fix me
    //  request from app is blocked by CORS
    //  GET from browser is fine
    //  data for reviews is stored in constant for now
    // this.http.get(this.googleReviewsUrl)

    return
  }
}
