import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AfficherticketComponent } from './ticket/afficherticket/afficherticket.component';
import { CreerticketComponent } from './ticket/creerticket/creerticket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModifierticketComponent } from './ticket/modifierticket/modifierticket.component';
import { CreerutilisateurComponent } from './utilisateur/creerutilisateur/creerutilisateur.component';
import { AfficherutilisateurComponent } from './utilisateur/afficherutilisateur/afficherutilisateur.component';
import { AdminboardComponent } from './dashboard/adminboard/adminboard.component';
import { UtilisateurboardComponent } from './dashboard/utilisateurboard/utilisateurboard.component';
import { ModifierprofileComponent } from './dashboard/utilisateurboard/modifierprofile/modifierprofile.component';
import { ModifierutilisateurComponent } from './utilisateur/modifierutilisateur/modifierutilisateur.component';




const routes: Routes = [
    {path: '', component:AccueilComponent},
    {path: 'ticket', component:AfficherticketComponent},
    {path: 'creerticket', component:CreerticketComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'modifierticket', component:ModifierticketComponent},
    {path: 'adduser', component:CreerutilisateurComponent},
    {path: 'users', component:AfficherutilisateurComponent},
    {path: 'admin', component:AdminboardComponent},
    {path: 'user', component:UtilisateurboardComponent},
    {path: 'updateprofil', component:ModifierprofileComponent},
    {path: 'updateuser/:user_id', component:ModifierutilisateurComponent},
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
