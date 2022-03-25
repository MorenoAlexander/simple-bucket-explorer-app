import { Injectable, OnInit } from '@angular/core';
import {
  ListBucketsCommand,
  ListBucketsCommandInput,
  ListObjectsCommand,
  S3Client,
  S3ClientConfig,
  S3ClientResolvedConfig,
} from '@aws-sdk/client-s3';
import { S3 } from 'aws-sdk';
import { Bucket } from 'aws-sdk/clients/s3';
@Injectable({
  providedIn: 'root',
})
export class S3Service implements OnInit {
  private S3Client: S3 | null = null;
  public constructor() {}

  ngOnInit(): void {}

  public initS3Client(options: S3ClientConfig) {
    this.S3Client = new S3({
      region: options.region as string,
      endpoint: options.endpoint as string,
      sslEnabled: false,
      s3ForcePathStyle: true,
      credentials: {
        //@ts-expect-error
        accessKeyId: options.credentials?.accessKeyId || '',
        //@ts-expect-error
        secretAccessKey: options.credentials?.secretAccessKey || '',
      },
    });
  }

  public async GetAllBuckets(): Promise<Bucket[]> {
    try {
      const data = await this.S3Client?.listBuckets().promise();
      console.log(data);
      return data?.Buckets || [];
    } catch (error) {
      return [];
    }
  }

  public async DeleteFile(): Promise<boolean> {
    return false;
  }
}
