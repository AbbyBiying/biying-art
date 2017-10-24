import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import 'hammerjs';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
//import { InMemoryDataService }  from './in-memory-data.service';

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
  MatDialogRef, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatRippleModule
  // MatDialog
  } from '@angular/material';
  
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';

import { HighlightDirective } from './attribute-directive/highlight.directive'
import { AppearDirective } from './attribute-directive/appear.directive';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PaintingComponent } from './painting/painting.component';
import { CeramicComponent } from './ceramic/ceramic.component';
import { VideoComponent } from './video/video.component';
import { PaintingDialogComponent } from './painting/painting-dialog/painting-dialog.component';
import { CeramicDialogComponent } from './ceramic/ceramic-dialog/ceramic-dialog.component';
import { DesignComponent } from './design/design.component';
import { DesignDialogComponent } from './design/design-dialog/design-dialog.component';
import { ArtworkTableComponent } from './artwork-table/artwork-table.component';
import { MessagesComponent } from './messages/messages.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoriteDetailComponent } from './favorite-detail/favorite-detail.component';

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
    AppearDirective,
    DesignComponent,
    DesignDialogComponent,
    ArtworkTableComponent,
    MessagesComponent,
    FavoritesComponent,
    FavoriteDetailComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,
    MatRadioModule,  
    MatPaginatorModule, 
    MatSortModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatRippleModule
  ],

  entryComponents:[
    PaintingDialogComponent,
    CeramicDialogComponent,
    DesignDialogComponent,
  ],

  exports: [BrowserModule],
  //providers: BROWSER_ANIMATIONS_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }

