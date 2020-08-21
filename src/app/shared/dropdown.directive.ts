import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') otvorenMeni = false;
  
  @HostListener('click') toggleOpen(){
      this.otvorenMeni = !this.otvorenMeni;
  }
}