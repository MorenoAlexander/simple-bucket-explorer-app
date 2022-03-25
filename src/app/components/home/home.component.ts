import { Component, OnInit } from '@angular/core';
import { S3Service } from '../../services/s3.service';
import { Bucket } from '@aws-sdk/client-s3';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private _s3Service: S3Service;

  dataSource: MatTableDataSource<Bucket>;

  constructor(S3Service: S3Service) {
    this.dataSource = new MatTableDataSource<Bucket>();
    this._s3Service = S3Service;
  }

  async ngOnInit() {
    this.dataSource.data = await this._s3Service.GetAllBuckets();
    console.log(this.dataSource?.data);
  }
}
