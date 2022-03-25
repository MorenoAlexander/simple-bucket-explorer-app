import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3clientSetupModalComponent } from './s3client-setup-modal.component';

describe('S3clientSetupModalComponent', () => {
  let component: S3clientSetupModalComponent;
  let fixture: ComponentFixture<S3clientSetupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S3clientSetupModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S3clientSetupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
