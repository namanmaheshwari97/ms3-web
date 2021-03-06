import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';
import {AccountService} from './account.service';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveFormsModule} from '@angular/forms';
import {SignUpEffects} from './sign-up.effects';
import {ActivateEffects} from './activate.effects';
import {ActivatePageComponent} from './activate-page/activate-page.component';
import {ActivationSuccessPageComponent} from './activation-success-page/activation-success-page.component';
import {ActivationLinkRequestPageComponent} from './activation-link-request-page/activation-link-request-page.component';
import {SignUpSuccessPageComponent} from './sign-up-success-page/sign-up-success-page.component';

import {ClarityModule} from 'clarity-angular';
import {RouterModule} from '@angular/router';
import {ActivationLinkEffects} from './activation-link.effects';
import {SignUpProgressComponent} from './sign-up-progress/sign-up-progress.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([
      SignUpEffects.Effects,
      ActivateEffects.Effects,
      ActivationLinkEffects.Effects
    ]),
    ClarityModule.forChild(),
    RouterModule,
    SharedModule
  ],
  declarations: [
    SignUpFormComponent,
    SignUpPageComponent,
    ActivatePageComponent,
    ActivationSuccessPageComponent,
    ActivationLinkRequestPageComponent,
    SignUpSuccessPageComponent,
    SignUpProgressComponent
  ],
  providers: [AccountService]
})
export class AccountModule {
}
