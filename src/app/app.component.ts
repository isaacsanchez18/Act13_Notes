import { Component, NgZone, ViewChild } from '@angular/core';
import {textareaAutoResize} from 'materialize-css';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  res = [];

  ngOnInit() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
    $('#textarea1').val('');
    textareaAutoResize($('#textarea1'));
  }

  miFuncion(el1: HTMLInputElement, el2: HTMLInputElement) {

    const nota = {
      tit: '',
      des: ''
    };

    if (el1.value === '' || el2.value === '') {
      alert('Rellena todos los campos');
    } else {
      nota.tit = el1.value;
      nota.des = el2.value;
      this.res.unshift(nota);
      console.log(nota.des);
    }
  }

  borrarInput(titulo: HTMLInputElement, descripcion: HTMLInputElement) {
    titulo.value = '';
    descripcion.value = '';
  }
}
