import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kolcsonzok',
  templateUrl: './kolcsonzok.component.html',
  styleUrls: ['./kolcsonzok.component.css']
})

export class KolcsonzokComponent implements OnInit {
  kolcsonzok: any[] = [];

  constructor(private baseService: BaseService, private router: Router) { }


  ngOnInit() {
    this.baseService.getKolcsonzok().subscribe(
      data => {
        this.kolcsonzok = data;
      },
      error => {
        console.error('Hiba történt az adatok lekérésekor', error);
      }
    );
  }
  openKolcsonzesek(kolcsonzoId: number) {
    this.router.navigate(['/kolcsonzok', { id: kolcsonzoId }]);
  }
  
}
