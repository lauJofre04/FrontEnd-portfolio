import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url=environment.URL+'educacion/'
  constructor(private httpClient:HttpClient) { }
  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public listaPer(id: number): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Educacion>{
  return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
  }

  public save(Educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', Educacion);
    }

  public edit(Educacion: Educacion):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', Educacion);
    }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }


}