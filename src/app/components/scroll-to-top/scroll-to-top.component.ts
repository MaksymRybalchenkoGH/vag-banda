import { Component, HostListener, Inject, OnInit } from '@angular/core'
import { DOCUMENT, ViewportScroller } from '@angular/common'

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
  private readonly appearanceThreshold = 100
  windowScrolled: boolean
  constructor(@Inject(DOCUMENT) private document: Document, private scroll: ViewportScroller) {}
  @HostListener('window:scroll', []) onWindowScroll() {
    if (
      this.document.defaultView.pageYOffset > this.appearanceThreshold ||
      this.document.documentElement.scrollTop > this.appearanceThreshold ||
      this.document.body.scrollTop > this.appearanceThreshold
    ) {
      this.windowScrolled = true
    }
    else if (
      (this.windowScrolled && this.document.defaultView.pageYOffset) ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop < 10
    ) {
      this.windowScrolled = false
    }
  }
  scrollToTop() {
    this.scroll.scrollToPosition([0, 0])
  }
  ngOnInit() {}
}
