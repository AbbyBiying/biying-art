import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import 'hammerjs';

import { MatIconModule, MatTabsModule, MatSidenavModule, MatMenuModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';

import { HighlightDirective } from './attribute_directive/highlight.directive'
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
    HighlightDirective,
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
    MatButtonModule, 
    MatCheckboxModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

