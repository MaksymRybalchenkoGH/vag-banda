import {Inject, Injectable} from '@angular/core'
import {DOCUMENT, ViewportScroller} from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(@Inject(DOCUMENT) private document: Document, private scroll: ViewportScroller) { }

  public scrollTo(position?: [number, number]): void {
    (this.document.getElementsByTagName('html')?.[0]).style.scrollBehavior = 'smooth'
    setTimeout(() => {
      if(position) {
        this.scroll.scrollToPosition(position)
      }
      (this.document.getElementsByTagName('html')?.[0]).style.scrollBehavior = 'auto'
    }, 100)
  }
}
