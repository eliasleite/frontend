import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {
  
   ngOnInit(): void {      
   }
}
