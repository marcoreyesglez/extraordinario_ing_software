import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-consulta-paises',
  templateUrl: './consulta-paises.component.html',
  styleUrls: ['./consulta-paises.component.scss']
})
export class ConsultaPaisesComponent implements OnInit {
  title = 'Consulta de países';
  paises: any;
  constructor(
    private _paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.consulta();
  }

  consulta() {
    this._paisesService.consultaPaises().subscribe(
      (response:any) => {
        if (response && response['status']) {
          this.paises = response['paises'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  eliminaPais(index:any, pais_id:any){
    this._paisesService.elimina(pais_id).subscribe(
      (response:any) => {
        if (response && response['status']) {
          alert(response['msg'])
          this.paises.splice(index, 1);
        }
      }, error => {
        console.log(<any>error)
      });
  }

}
