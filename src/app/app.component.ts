import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { S3clientSetupModalComponent } from './components/s3client-setup-modal/s3client-setup-modal.component';
import { S3Service } from './services/s3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-bucket-explorer-app';

  s3clientDialog: boolean = false;

  constructor(public matDialog: MatDialog, public s3Service: S3Service) {}

  openS3SettingsDialog() {
    const dialogRef = this.matDialog.open(S3clientSetupModalComponent, {
      data: this.s3Service.options,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openS3SettingsDialogClose() {
    this.s3clientDialog = false;
  }
}
