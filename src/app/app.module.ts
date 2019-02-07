import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './routing';
import {BodynavComponent} from './components/bodynav/bodynav.component';
import {ProgramnavComponent} from './components/programnav/programnav.component';
import {BodyviewComponent} from './components/bodyview/bodyview.component';
import {SubBodyNavComponent} from './components/sub-body-nav/sub-body-nav.component';
import {ExeNavComponent} from './components/exe-nav/exe-nav.component';
import {ExeViewComponent} from './components/exe-view/exe-view.component';
import {MainBodyNavComponent} from './components/main-body-nav/main-body-nav.component';
import {EmbedVideo} from 'ngx-embed-video/dist';
import {HttpClientModule} from '@angular/common/http';
import {Ng5SliderModule} from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodynavComponent,
    ProgramnavComponent,
    BodyviewComponent,
    SubBodyNavComponent,
    ExeNavComponent,
    ExeViewComponent,
    MainBodyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
