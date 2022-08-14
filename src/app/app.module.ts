import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Navbar } from './components/navbar/navbar.component';
import { Home } from './components/home/home.component';
import { Footer } from './components/footer/footer.component';
import { DinoRun } from './components/dinorun/dinorun.component';
import { Birdie } from './components/birdie/birdie.component';
import { Memory } from './components/memory/memory.component';
import { GameCardComponent } from './components/memory/game-card/game-card.component';
import { RestartDialogComponent } from './components/memory/restart-dialog/restart-dialog.component';
import { Bored } from './components/bored/bored.compopnent';
import { Piano } from './components/piano/piano.component';
import { Cruise } from './components/cruise/cruise.component';
import { About } from './components/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from './components/contact/contact.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, data: { animation: 'fader' } },
  { path: 'dinorun', component: DinoRun, data: { animation: 'fader' } },
  { path: 'flyaway', component: Birdie, data: { animation: 'fader' } },
  { path: 'matchmemory', component: Memory, data: { animation: 'fader' } },
  { path: 'bored', component: Bored, data: { animation: 'fader' } },
  { path: 'piano', component: Piano, data: { animation: 'fader' } },
  { path: 'cruise', component: Cruise, data: { animation: 'fader' } },
  { path: 'about', component: About, data: { animation: 'fader' } },
  { path: 'contact', component: Contact, data: { animation: 'fader' } }
]

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Home,
    Footer,
    DinoRun,
    Birdie,
    Memory,
    GameCardComponent,
    RestartDialogComponent,
    Bored,
    Piano,
    Cruise,
    About,
    Contact
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase, 'action-six'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
