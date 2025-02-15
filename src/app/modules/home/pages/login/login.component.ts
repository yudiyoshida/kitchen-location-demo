import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ButtonFlatComponent } from '../../../../shared/components/button-flat/button-flat.component';
import { EmailInputComponent } from '../../../../shared/components/inputs/email-input/email-input.component';
import { PasswordInputComponent } from '../../../../shared/components/inputs/password-input/password-input.component';
import { HomeContainerComponent } from '../../components/home-container/home-container.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ReactiveFormsModule,
    ButtonFlatComponent,
    EmailInputComponent,
    PasswordInputComponent,
    HomeContainerComponent,
  ],
})
export class LoginComponent {
  public form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private homeService: HomeService,
  ) {}

  public gotoForgotPassword(): void {
    this.router.navigate(['../forgot-password'], { relativeTo: this.activatedRoute });
  }

  public submit(): void {
    const data = this.form.getRawValue();

    this.homeService.login(data.email, data.password).subscribe(() => {
      this.toastr.success('Login efetuado com sucesso!');
      this.router.navigate(['/gerencial']);
    });
  }
}
