import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Categories, Category } from '../../data/categories'
import { AppRoutes } from '../../constants/app-routes'
import { IsMobileService } from '../../services/is-mobile.service'
import {fromEvent, Observable, Subscription} from 'rxjs'
import { DetectPlatformService } from '../../services/detect-platform.service'
import {DOCUMENT} from '@angular/common'

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesPageComponent implements OnInit, OnDestroy {
  public readonly thresholdOffset = 267
  public readonly StickyClassName = 'sticky-form'
  public readonly AppRoutes = AppRoutes
  private scrollSubscription: Subscription
  public category: Category
  public isHandset$: Observable<boolean>

  @ViewChild('feedbackForm') feedbackFormRef: ElementRef

  constructor(
    private route: ActivatedRoute,
    private isMobileService: IsMobileService,
    private detectPlatformService: DetectPlatformService,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.isHandset$ = this.isMobileService.isHandset$()
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = Categories.find(category => category.id === params.categoryId) || null
    })

    if (this.detectPlatformService.isBrowser) {
      this.isMobileService.isHandset$().subscribe(isMobile => {
        if (!isMobile) {
          this.scrollSubscription = this.subscribeOnScroll()
        } else {
          this.feedbackFormRef?.nativeElement.classList.remove(this.StickyClassName)
          this.scrollSubscription?.unsubscribe()
        }
      })
    }
  }

  ngOnDestroy() {
    this.scrollSubscription?.unsubscribe()
  }

  private subscribeOnScroll(): Subscription {
    return fromEvent(this.document, 'scroll')
      .subscribe(() => {
        const pageYOffset = this.document.defaultView.pageYOffset
        if (pageYOffset > this.thresholdOffset) {
          this.feedbackFormRef.nativeElement.classList.add(this.StickyClassName)
        } else {
          this.feedbackFormRef.nativeElement.classList.remove(this.StickyClassName)
        }

      })
  }
}
