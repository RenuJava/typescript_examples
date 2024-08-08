import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  ngOnInit() {
    console.log("AppComponent:OnInit");
  }
  constructor() {
    console.log("AppComponent:Contructed");
  }
 
  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }
 
 
 
  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }
}
