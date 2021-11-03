import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {RespuestaAdminAreaList} from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAdminAreaList()
  {
    //return this.http.get<RespuestaAdminAreaList>
    ('http://dataservice.accuweather.com/locations/v1/adminareas/cl?apikey=VD1ZUadGnReDRDcwydZNx0PGiI0HCd9R&language=en-us')
  }
}


