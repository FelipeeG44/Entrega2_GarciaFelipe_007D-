import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Tiempo } from '../../interfaces/interfaces';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  clima: Tiempo[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAdminAreaList().subscribe(resp=>{
      console.log('clima', resp);
      this.clima.push(...resp.tiempos);
    });
  }
}
