import { Component, Input } from "@angular/core";


@Component( {
    selector: 'app-componente1',
    templateUrl: 'componente1.component.html'
})

export class Componente1Component{

  @Input() data = [];

  ngOnInit() {

    setTimeout(() => {
        //console.log(this.data)
    }, 2000);

  }
  
}