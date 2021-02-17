import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-execicio-data-binding',
  templateUrl: './execicio-data-binding.component.html',
  styleUrls: ['./execicio-data-binding.component.scss']
})
export class ExecicioDataBindingComponent implements OnInit {
  
  @Input() palavra: string | undefined;
  @Input() color: string | undefined;
  @Output() clicado = new EventEmitter();

  imageURL = 'https://cdn.dicionariopopular.com/imagens/y6n5bl.jpg'
  initialValue = 'Valor Inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';
  
  //exercicio contador
  @Input() currentValue = 0;
  @Output() changedValue = new EventEmitter();

  increment(){
    this.currentValue += 1;
  }
  decrement(){
    this.currentValue -= 1;
  }
  currentValueInput($event: any){
    console.log('event ', $event);
    this.currentValue = $event.target.value;
    console.log(typeof this.currentValue);
    // parseInt(this.currentValue, 10);
    Number(this.currentValue)
    console.log(typeof this.currentValue);
    // return parseInt(String(this.currentValue), 10);
  }
  //fim exercicio

  // palavra = 'existe sim';
  
  valorDoInput = "";

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled ', this.isDisabled);
    }, 5000);
   }

  ngOnInit(): void {
  }
  getImageURL(): string {
    return this.imageURL;
  }

  
  onClick($event: any){
    console.log('clicou! ', $event);
  }
  
  onKeyUp($event: any){
    this.valorDoInput = $event.target.value;
    console.log('clicou! ', $event);
  }
  
  passouMouse(){
    console.log('passouMouse');
  }
  
  onclickBotaoEmissor($event: any){
    console.log('DEvo emitir informações para o componente pai');
    this.clicado.emit($event); // poderia enviar qualquer coisa, como um bolean ou string
  }
}
