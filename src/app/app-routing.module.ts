import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { GitComponent } from './git/git.component';
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  {path: 'git', component: GitComponent},
  {path: 'repo', component: RepoComponent},
  {path: '', redirectTo: 'git', pathMatch: 'full'},

];
=======


const routes: Routes = [];
>>>>>>> e066fe141d884ae824d3c5f0cad0696a243b1b46

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
