export class SignUpForm {

  constructor(public email: string,
              public password: string,
              public phoneNumber?: string,
              public notification?: boolean) {
  }
}
