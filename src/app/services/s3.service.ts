import {Injectable, OnInit} from '@angular/core';
import {
  S3,
  S3Client,
  S3ClientConfig,
  ListBucketsCommand,
  ListBucketsCommandInput,
  Bucket,
  S3ClientResolvedConfig
} from "@aws-sdk/client-s3"
import {inflate} from "zlib";
@Injectable({
  providedIn: 'root'
})
export class S3Service  implements OnInit {

  private s3Client: S3Client | null = null;
  public constructor() { }

  ngOnInit(): void {
  }

  public initS3Client(options: S3ClientConfig) {

    this.s3Client = new S3Client(options);
  }

  get options() : S3ClientResolvedConfig | undefined {
    return this.s3Client?.config;
  }

  public async GetAllBuckets() : Promise<Bucket[]> {
    try {
      const data = await this.s3Client?.send(new ListBucketsCommand({}));
      if (!!data && !!data.Buckets) {
        return data.Buckets;
      }
      return [];
    }
    catch (e) {
      return []
    }
  }



}




