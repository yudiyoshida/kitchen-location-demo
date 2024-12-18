import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor(private http: HttpClient) {}

  public uploadFile(file: File): Observable<UploadFileResponse> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<UploadFileResponse>(`${environment.api}/upload/one-file`, formData);
  }
}

export type UploadFileResponse = {
  fileUrl: string;
  fileKey: string;
}
