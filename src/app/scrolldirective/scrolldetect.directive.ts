import { Directive, HostListener} from '@angular/core';
     
@Directive({
  selector:'[scrolldetect]',
})
export class ScrollDirective
{
    consturctor()
    { 
    }
 
    @HostListener('window:scroll') 
    onWindowScroll()
    {
      console.log('scrolling not allowed'); 
      //alert('scrolling not allowed');
    }
}