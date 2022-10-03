import { Component } from '@angular/core';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  lista1;
  lista2;
  noticias: any = [];

  constructor(
    private dataserv: DataService
  ) { }


  
  ngOnInit() {
    //setTimeout(() => {
      this.dataserv.getData("marcas").subscribe( res => {
        this.lista1 = res
      });

      this.dataserv.getData("categorias").subscribe( res => {
        this.lista2 = res
      });

      this.dataserv.getData("noticias").subscribe( res => {
        const list:any = res
        list.forEach((element) => {
          const noticia = {
            id:     element._id,
            title:  element.title.substr(0,50)+"...",
            content:element.summary.substr(0,350)+"...",
            date:   element.published_date,
            link:   element.link
          };

          this.noticias.push(noticia)
          // console.log(noticia)
        }) ;

      })
    //}, 2000);
  }


}


interface Noticias{
  title: string;
  _id: string;
  published_date: string;
  link: string;
}
