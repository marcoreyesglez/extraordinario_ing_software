import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-form-paises',
  templateUrl: './form-paises.component.html',
  styleUrls: ['./form-paises.component.scss']
})
export class FormPaisesComponent implements OnInit {
  title: any;
  pais_id: any;
  idiomas: any;
  continentes: any;
  paisForm: FormGroup;
  pais: any;

  constructor(
    private route: ActivatedRoute,
    private _paisesService: PaisesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.pais_id = this.route.snapshot.paramMap.get('pais_id');
    if (this.pais_id) {
      this.title = 'Edita país';
    } else {
      this.title = 'Crea país';
    }

    this.paisForm = this.formBuilder.group({
      paisNombre: ['', Validators.required],
      paisCodigo: ['', Validators.required],
      paisCapital: ['', Validators.required],
      paisMoneda: ['', Validators.required],
      paisIdioma: ['', Validators.required],
      paisContinente: ['', Validators.required]
    });
  }
  get f() { return this.paisForm.controls; }

  ngOnInit(): void {
    this.consultaCatContinentes();
    this.consultaCatIdiomas();
    if(this.pais_id){
      this.consultaEspecifica();
    }
  }

  consultaEspecifica(){
    this._paisesService.consultaEspecificaPais(this.pais_id).subscribe(
      (response: any) => {
        if (response && response['status']) {
          this.pais = response['pais'][0];
          this.paisForm = this.formBuilder.group({
            paisNombre: [this.pais['pais_nombre'], Validators.required],
            paisCodigo: [this.pais['codigo'], Validators.required],
            paisCapital: [this.pais['capital'], Validators.required],
            paisMoneda: [this.pais['moneda'], Validators.required],
            paisIdioma: [this.pais['idioma_id'], Validators.required],
            paisContinente: [this.pais['continente_id'], Validators.required]
          });
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaCatIdiomas() {
    this._paisesService.consultaIdiomas().subscribe(
      (response: any) => {
        if (response && response['status']) {
          this.idiomas = response['idiomas'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaCatContinentes() {
    this._paisesService.consultaContinentes().subscribe(
      (response: any) => {
        if (response && response['status']) {
          this.continentes = response['continentes'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  guardarInformacion() {
    if (this.paisForm.invalid) {
      Object.keys(this.paisForm.controls).forEach(controlKey => {
        this.paisForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this._paisesService.modificaPaises(this.pais_id, this.paisForm).subscribe(
      (response: any) => {
        if (response && response['status']){
          alert(response['msg']);
          this.router.navigate(['consulta'])
        }
      }, error => {
        console.log(<any>error)
      });
  }

}
