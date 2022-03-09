import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {S3ClientResolvedConfig} from "@aws-sdk/client-s3";

@Component({
  selector: 'app-s3client-setup-modal',
  templateUrl: './s3client-setup-modal.component.html',
  styleUrls: ['./s3client-setup-modal.component.scss']
})
export class S3clientSetupModalComponent implements OnInit {

  @Input('dialog') dialog : boolean = false

  constructor(public dialogRef : MatDialogRef<S3clientSetupModalComponent>, @Inject(MAT_DIALOG_DATA) public data : S3ClientResolvedConfig | undefined | null) {}


  ngOnInit(): void {
  }

  closeWithResult(data : any) {
    this.dialogRef.close(data)

  }

}
