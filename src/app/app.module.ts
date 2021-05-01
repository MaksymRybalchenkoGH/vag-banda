import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AgmCoreModule } from '@agm/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MainNavComponent } from './components/main-nav/main-nav.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { ServicesComponent } from './pages/services/services.component'
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ContactsComponent } from './pages/contacts/contacts.component'
import { FooterComponent } from './components/footer/footer.component'
import { LeafletMapComponent } from './components/maps/leaflet-map/leaflet-map.component'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component'
import { GoogleMapComponent } from './components/maps/google-map/google-map.component'
import { GeoMapComponent } from './components/maps/geo-map/geo-map.component'
import {GOOGLE_API_KEY} from './constants/public-api'

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    FooterComponent,
    LeafletMapComponent,
    FeedbackFormComponent,
    GoogleMapComponent,
    GeoMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    const icons = ['instagram', 'facebook']
    icons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/socials/${icon}.svg`)
      )
    })
  }
}
