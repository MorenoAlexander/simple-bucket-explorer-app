import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { S3ClientResolvedConfig } from '@aws-sdk/client-s3';

@Component({
  selector: 'app-s3client-setup-modal',
  templateUrl: './s3client-setup-modal.component.html',
  styleUrls: ['./s3client-setup-modal.component.scss'],
})
export class S3clientSetupModalComponent implements OnInit {
  form!: FormGroup;
  @Input('dialog') dialog: boolean = false;

  modalData: IS3ClientModalFormData = {} as IS3ClientModalFormData;

  constructor(
    public dialogRef: MatDialogRef<S3clientSetupModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: S3ClientResolvedConfig | undefined | null,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      region: [null, [Validators.required]],
      endpoint: [null, [Validators.required]],
      accessKeyId: [null, [Validators.required]],
      secretAccessKey: [null, [Validators.required]],
    });
  }

  SavedData() {
    const data: IS3ClientModalFormData = this.form.value;
    console.table(data);
    this.dialogRef.close(data);
  }

  close() {
    this.dialogRef.close();
  }
}

interface IS3ClientModalFormData {
  region?: string;
  endpoint?: string;
  accessKeyId?: string;
  accessKeySecret?: string;
}
