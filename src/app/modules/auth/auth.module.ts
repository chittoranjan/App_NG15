import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import {AuthComponent} from "./auth.component";
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/effects";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth',authReducer),
    EffectsModule.forFeature([AuthEffects])

  ]
})
export class AuthModule { }
