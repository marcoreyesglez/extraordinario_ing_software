import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pais_id: any;
  constructor(
    private route: ActivatedRoute
  ){
    this.pais_id = this.route.snapshot.paramMap.get('pais_id');
   }

  ngOnInit(): void {
  }

}
