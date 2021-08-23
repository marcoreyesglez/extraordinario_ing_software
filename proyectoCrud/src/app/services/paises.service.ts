import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private _httpClient: HttpClient
  ) {

  }

  consultaPaises() {
    return this._httpClient.get('https://localhost/extraordinario/apiCrud/consultaPaises.php');
  }

  consultaIdiomas() {
    return this._httpClient.get('https://localhost/extraordinario/apiCrud/consultaCatIdioma.php');
  }

  consultaEspecificaPais(pais_id: any) {
    var params = '?pais_id='+pais_id;
    return this._httpClient.get('https://localhost/extraordinario/apiCrud/consultaEspecifica.php'+params);
  }
  
  consultaContinentes() {
    return this._httpClient.get('https://localhost/extraordinario/apiCrud/consultaCatContinente.php');
  }
  
  guardaInformacion() {
    return this._httpClient.get('https://localhost/extraordinario/apiCrud/crea.php');
  }
  
  elimina(pais_id:any) {
    var params = '?pais_id='+pais_id;
    return this._httpClient.get('https://localhost/extraordinario/apiCrud/elimina.php'+params);
  }

  modificaPaises(pais_id: any, formPais: any) {
    let formData: FormData = new FormData();
    formData.append('paisNombre', formPais.get('paisNombre').value);         
    formData.append('paisCodigo', formPais.get('paisCodigo').value);
    formData.append('paisCapital', formPais.get('paisCapital').value);
    formData.append('paisMoneda', formPais.get('paisMoneda').value);
    formData.append('paisIdioma', formPais.get('paisIdioma').value);
    formData.append('paisContinente', formPais.get('paisContinente').value);

    if (pais_id == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post('https://localhost/extraordinario/apiCrud/crea.php', formData);
    } else {
      formData.append('pais_id', pais_id);
      return this._httpClient.post('https://localhost/extraordinario/apiCrud/edita.php', formData);
    }
  }
}
