import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonFlatComponent } from '../../../../shared/components/button-flat/button-flat.component';
import { PasswordInputComponent } from '../../../../shared/components/inputs/password-input/password-input.component';
import { TextInputComponent } from '../../../../shared/components/inputs/text-input/text-input.component';
import { HomeContainerComponent } from '../../components/home-container/home-container.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  imports: [
    ReactiveFormsModule,
    ButtonFlatComponent,
    PasswordInputComponent,
    TextInputComponent,
    HomeContainerComponent,
  ],
})
export class ResetPasswordComponent implements OnInit {
  public form = this.fb.group({
    email: ['', [Validators.required]],
    code: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const email = this.activatedRoute.snapshot.queryParams['email'];
    this.form.controls.email.setValue(email);
  }

  public submit(): void {
    this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
  }
}
