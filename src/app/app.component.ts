import { Component } from '@angular/core';
import { IBreadCrumb } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public breadcrumbs: IBreadCrumb[] | any
  title = 'employeeManagement';
  sideBarOpen=true;

  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;
  }


}
