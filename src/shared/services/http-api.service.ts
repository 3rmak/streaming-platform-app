import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  private readonly backUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public setVideoLink(link: string): Promise<void> {
    const url = this.backUrl + '/link';
    return lastValueFrom(this.http.post(url, { link })).then();
  }
}
