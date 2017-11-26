import { Injectable } from '@angular/core';
import {UserInfo} from '../_domains/user-info';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import * as UserInfoGetActions from '../_effect-actions/user-info-get.actions';
import {EditUserInfoForm} from '../_domains/edit-user-info-form';
import {ChangePasswordForm} from '../_domains/change-password-form';

@Injectable()
export class UserInfoService {
  public userInfo$: Observable<UserInfo>;
  public auth$: Observable<Auth>;
  private _auth: Auth;

  constructor(private _store: Store<any>) {
    this.userInfo$ = this._store.select('userInfo');
    this.auth$ = this._store.select('auth');
    this.auth$.subscribe((auth) => {
      this._auth = auth;
    });
  }

  get() {
    this._store.dispatch(new UserInfoGetActions.Request(this._auth.id));
  }

  update(form: EditUserInfoForm) {
    console.log(form);
  }

  changePassword(form: ChangePasswordForm) {
    console.log(form);
  }
}
