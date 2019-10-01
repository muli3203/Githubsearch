import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { GitComponent } from './git/git.component';
import { RepoComponent } from './repo/repo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
=======
import { FormComponent } from './form/form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
>>>>>>> e066fe141d884ae824d3c5f0cad0696a243b1b46

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    GitComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
=======
    FormComponent,
    NavBarComponent,
    RepoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> e066fe141d884ae824d3c5f0cad0696a243b1b46
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
