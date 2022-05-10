import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any[]=[];
  usuario:any[]=[];

  constructor() { }

  ngOnInit(): void {

    const usuarios_recogidos = localStorage.getItem("usuarios")

    if (typeof usuarios_recogidos === 'string') {
      this.usuarios = JSON.parse(usuarios_recogidos)
    }else{
      this.usuarios = [{}];
      this.usuarios.pop();
    }
    for(var i in this.usuarios){
      this.usuario.push(JSON.parse(this.usuarios[i]));
    }
  }

}
