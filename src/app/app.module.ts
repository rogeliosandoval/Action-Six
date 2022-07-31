import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'dinorun', component: DinoRun },
  { path: 'flyaway', component: Birdie },
  { path: 'matchmemory', component: Memory },
  { path: 'bored', component: Bored },
  { path: 'piano', component: Piano },
  { path: 'cruise', component: Cruise }
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
    Cruise
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
