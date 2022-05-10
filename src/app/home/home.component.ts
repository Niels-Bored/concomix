import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  ngOnInit(): void {
  }

  
  registrar(value: any) {
    const usuarios_recogidos = localStorage.getItem("usuarios")
    var usuarios;

    if (typeof usuarios_recogidos === 'string') {
      usuarios = JSON.parse(usuarios_recogidos)
    }else{
      usuarios = [{}];
      usuarios.pop();
    }

    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;
    var fecha = (<HTMLInputElement>document.getElementById("fecha")).value;

    var usuario = JSON.stringify(
    { 
        nombre:nombre, 
        correo:correo,
        fecha:fecha,
        sexo:value.sexo
    });

    usuarios.push(usuario);
    localStorage.setItem("usuarios",JSON.stringify(usuarios));

    (<HTMLInputElement>document.getElementById("nombre")).value="";
    (<HTMLInputElement>document.getElementById("correo")).value="";
    (<HTMLInputElement>document.getElementById("fecha")).value="";
    // alert mamalón de que se registró
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Registro exitoso',
      showConfirmButton: false,
      timer: 1550
    })

    setTimeout('document.location.reload()',1600);
    
  }
}
