import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _tagHistory: string[] = [];

  constructor() { }


  get tagsHistory() {

    //Retorno una copia del arreglo para no pasarlo por referencia.
    return [...this._tagHistory];
  }

  public searchTag( tag: string ):void {
    this._tagHistory.unshift( tag );
  }

}