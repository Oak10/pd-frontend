import { APP_INITIALIZER, NgModule } from '@angular/core';
import { initializer } from 'src/utils/app-init';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 


import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table'
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { MovieService } from './services/movie.service';
import { MovieComponent } from './components/movie/movie.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import {CheckboxModule} from 'primeng/checkbox';
import { MailService } from './services/mail.service';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    MovieComponent,
    ConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PanelModule,
    AccordionModule,
    MenubarModule,
    ToolbarModule,
    //Modal,
    DialogModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    KeycloakAngularModule, // add keycloakAngular module
    // RadioButtonModule
    CheckboxModule,
    CardModule
  ],
  providers: [ 
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
    ConfirmationService,
    MailService,
    MessageService, 
    MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
