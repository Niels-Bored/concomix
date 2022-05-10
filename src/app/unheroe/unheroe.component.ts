import { Component, OnInit,Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Heroe } from '../heroe'
import { HeroeService } from '../shared/heroe.service'

@Component({
  selector: 'app-unheroe',
  templateUrl: './unheroe.component.html',
  styleUrls: ['./unheroe.component.css']
})
export class UnheroeComponent implements OnInit {
  @Input() heroe:Heroe={nombre:"",bio:"",img:"",aparicion:"",casa:""}
  constructor(public heroeService: HeroeService, public activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>{
      this.heroe=heroeService.getUnHeroe(params['id'])
    })
  }


  ngOnInit(): void {
  }


  
}
