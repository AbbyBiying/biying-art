import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { MaterialModule, MdNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MdMenuModule} from '@angular/material';
import { HttpModule} from '@angular/http';
import { MdSidenavModule} from '@angular/material';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PaintingComponent } from './painting/painting.component';
import { CeramicComponent } from './ceramic/ceramic.component';
import { VideoComponent } from './video/video.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', 
    component: PortfolioComponent,
    children: [
      {
        path: 'painting',
        component: PaintingComponent,
      }, 
      {
        path: 'ceramic',
        component: CeramicComponent,
      },
      {
        path: 'video',
        component: VideoComponent,
      }, 
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**',
    redirectTo: '/about',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    PaintingComponent,
    CeramicComponent,
    VideoComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

