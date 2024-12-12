import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonFlatComponent } from '../../../../shared/components/button-flat/button-flat.component';
import { EmailInputComponent } from '../../../../shared/components/inputs/email-input/email-input.component';
import { HomeContainerComponent } from '../../components/home-container/home-container.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  imports: [
    ReactiveFormsModule,
    ButtonFlatComponent,
    EmailInputComponent,
    HomeContainerComponent,
  ],
})
export class ForgotPasswordComponent {
  public form = this.fb.group({
    email: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  public submit(): void {
    this.router.navigate(['../reset-password'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        email: this.form.value.email,
      },
    });
  }
}
