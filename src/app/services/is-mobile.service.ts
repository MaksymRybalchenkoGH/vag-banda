import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { map, shareReplay, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class IsMobileService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  public isHandset$(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      shareReplay(),
      tap(a => console.log(a))
    )
  }
}
