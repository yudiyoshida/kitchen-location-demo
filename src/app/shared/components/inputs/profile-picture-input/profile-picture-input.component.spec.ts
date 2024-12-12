import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureInputComponent } from './profile-picture-input.component';

describe('ProfilePictureInputComponent', () => {
  let component: ProfilePictureInputComponent;
  let fixture: ComponentFixture<ProfilePictureInputComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ProfilePictureInputComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfilePictureInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
