import { Component, Input } from "@angular/core";


@Component( {
    selector: 'app-componente2',
    templateUrl: 'componente2.component.html'
})

export class Componente2Component{

    @Input() data = [];

    ngOnInit() {
  
      setTimeout(() => {
          console.log(this.data[0])
      }, 2000);
  
    }
    
}