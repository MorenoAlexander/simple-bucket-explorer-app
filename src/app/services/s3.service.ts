import { Injectable, OnInit } from '@angular/core';
// import {
//   ListBucketsCommand,
//   ListBucketsCommandInput,
//   ListObjectsCommand,
//   S3Client,
//   S3ClientConfig,
//   S3ClientResolvedConfig,
// } from '@aws-sdk/client-s3';
import { S3 } from 'aws-sdk';
import { Bucket } from 'aws-sdk/clients/s3';
@Injectable({
  providedIn: 'root',
})
export class S3Service implements OnInit {
  private S3Client!: S3;
  public constructor() {}

  ngOnInit(): void {}

  public initS3Client(options: S3.ClientConfiguration): void {
    this.S3Client = new S3(options);
  }

  public async GetAllBuckets(): Promise<Bucket[]> {
    try {
      // const data = await this.S3Client?.listBuckets().promise();
      // console.log(data);
      // return data?.Buckets || [];

      this.S3Client.listBuckets((err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    } catch (error) {
      return [];
    }

    return [];
  }

  public async DeleteFile(): Promise<boolean> {
    return false;
  }
}
