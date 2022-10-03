import { Component, Input } from "@angular/core";


@Component( {
    selector: 'app-componente3',
    templateUrl: 'componente3.component.html'
})

export class Componente3Component{

  @Input() data = [];

  slideOpts = {
    slidesPerView: 7.2,
    spaceBetween: -10,
    //freeMode: true,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 550px
      150: {
        slidesPerView: 3.5,
        spaceBetween: -10
      },
      700: {
        slidesPerView: 5.2,
        spaceBetween: -10
      },
      // when window width is >= 1050px
      1050: {
        slidesPerView: 6.2,
        spaceBetween: -10
      }
    },
  };
  
  ngOnInit() {

    setTimeout(() => {
        //console.log(this.data)
    }, 2000);

  }
  
}