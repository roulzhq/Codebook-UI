import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ToastrModule } from 'ngx-toastr';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

// App components
import { HeaderComponent } from './components/header/header.component';

// Views
import { IndexView } from './views/index/index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CodebookView } from './views/codebook/codebook.component';
import { CodebookListView } from './views/codebook-list/codebook-list.component';
import { AuthView } from './views/auth/auth.component';
import { CodebookCellComponent } from './components/codebook-cell/codebook-cell.component';

/*
  Configurations
*/

const toastrOptions = {
  timeOut: 3000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true,
};

@NgModule({
  declarations: [
    AppComponent,
    // App components
    HeaderComponent,
    // Views
    IndexView,
    CodebookView,
    CodebookListView,
    AuthView,
    CodebookCellComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(toastrOptions),
    MonacoEditorModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
