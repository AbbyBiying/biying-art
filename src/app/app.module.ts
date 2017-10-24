import { BrowserModule } from '@angular/platform-browser';
import { NgModule, AnimationKeyframe } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import 'hammerjs';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';

import { 
  MatTooltipModule, 
  MatSelectModule, 
  MatIconModule, 
  MatTabsModule, 
  MatSidenavModule, 
  MatMenuModule, 
  MatButtonModule, 
  MatCheckboxModule, 
  MatGridListModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatToolbarModule,
  MatDialogModule,
  MatDialogRef
  // MatDialog
  } from '@angular/material';
  
import { ScrollerDirective } from './attribute_directive/scroller.directive'
import { HighlightDirective } from './attribute_directive/highlight.directive'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PaintingComponent } from './painting/painting.component';
import { CeramicComponent } from './ceramic/ceramic.component';
import { VideoComponent } from './video/video.component';
import { PaintingDialogComponent } from './painting/painting-dialog/painting-dialog.component';
import { CeramicDialogComponent } from './ceramic/ceramic-dialog/ceramic-dialog.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { 
    path: 'portfolio', 
    component: PortfolioComponent,
    // children: [
    //   {
    //     path: 'painting',
    //     component: PaintingComponent,
    //   }, 
    //   {
    //     path: 'ceramic',
    //     component: CeramicComponent,
    //   },
    //   {
    //     path: 'video',
    //     component: VideoComponent,
    //   }, 
    // ]
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
    PaintingDialogComponent,
    CeramicDialogComponent,
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
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
  ],

  entryComponents:[
    PaintingDialogComponent,
    CeramicDialogComponent
  ],

  exports: [BrowserModule],
  //providers: BROWSER_ANIMATIONS_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }

