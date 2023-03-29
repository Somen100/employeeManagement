import { IDropdownSettings } from 'ng-multiselect-dropdown';
// import { ToastService } from 'src/app/services/toast.service';

import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cities, Country, Employee, EmployeeSkills, Gender, Skills } from '../models/user';
import { MasterserviceService } from '../services/masterservice.service';



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  CountryList: Array<Country> = [];
  countryId: number = 0;
  displayCheck:boolean=false;
  employee: Employee = new Employee;
  cities: Array<Cities> = [];
  SkillsList:Array<Skills>=[];
  genders:Array<Gender>=[];



  settingForColumns: IDropdownSettings = {};
  resultText:EmployeeSkills[]=[];  
  errorMsg: string='';

  isdisable:Boolean=true;

  constructor(private masterService: MasterserviceService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    debugger

    // this.toastr.success(
    //   'hi successfully!',
    //   'Success'
    // );


    this.getCountryList('');
    this.getAllGenders();
    this.getAllSkills();

    this.employee.employeeSkills = [];
    this.employee.otherCityName='';
    // this.contractNumber = '';
  }
 
  selectedEmployeeSkills: Array<EmployeeSkills> = [];
  employeeSkills:EmployeeSkills=new EmployeeSkills();


  yourfunc(e: any){
    if(e.currentTarget.checked){    
          this.employee.cityId=0;
    }
  }



  onChange(sk:any,event:any) {  
    debugger;
    this.errorMsg="";  
     const checked = event.target.checked;  
    
 

      if (checked) {  
        //this.employee.cityId= 0;
     
        this.selectedEmployeeSkills.push( sk)
       
         } else {  
           const index = this.resultText.indexOf(this.employeeSkills);  
           this.selectedEmployeeSkills.splice(index, 1);  
       }  
    } 
   
    disableCityDropdown(event:any){
      const checked = event.target.checked;  
    
      if (checked) {  
        this.employee.cityId= 0;
      }
      if(!this.employee.otherCityName == null){
        this.isdisable=true;
      }
      else{
        this.isdisable=true;
      }
    }
    Cancel(){
      this.employee.address='';
      this.employee.checked=!this.employee.checked;
      this.employee.cityId=0;
      this.employee.countryId=0;
      this.employee.dob=0;
      this.employee.email='';
      this.employee.employeeId=0;
      this.employee.employeeSkills=[ ];
      this.employee.firstName='';
      this.employee.lastName='';
      this.employee.genderId=0;
      this.employee.mobile='';
      this.employee.otherCityName='';
      this.employee.skillId=0;
      this.employee.skillchecked=!this.employee.skillchecked;
      this.SkillsList.forEach(sk => {
        sk.checked = false
      })
    }

    SaveEmployeeDetails(){
  
      this.employee.employeeSkills = this.selectedEmployeeSkills;
      if (this.employee.cityId>0){

        this.employee.cityId=this.employee.cityId;
      }

      else{
        this.employee.cityId=0
      }
      debugger; 
      var result = this.masterService.postEmployeeDetail(this.employee)
      .subscribe((result) => 
      {
        debugger;
        this.employee = result as Employee;

        if (result) {
          
          this.toastr.success(
            'Employee details added successfully!',
            'Success'
          );
           
        } else {
          this.toastr.error(
            'Some error occured, please check if this Employee detail already exists.',
            'Error'
          );
        }
      },
      (err) => {
        this.toastr.error(
          'Record already exists.',
          'Error'
        );
     }
    );
  }
  

  onProfitSelectionChange(entry:any): void {
    this.employee.genderId  = entry;
}

  getCountryList(data: any) {
    debugger;
    this.masterService.getCountryList(data).subscribe((result) => {
      this.CountryList = result as Country[];
    });
  }

  getAllSkills() {
    debugger;
    this.masterService.getAllSkills().subscribe((result) => {
      this.SkillsList = result as Skills[];
    });
  }

  getAllGenders(){
    debugger;
    this.masterService.getAllGenders().subscribe(
      (result)=>{this.genders= result as [Gender]

      }
    );
  }

  getCitiesList() {
    debugger;
    this.masterService.getCitiesList(this.employee.countryId)
      .subscribe(
        (result) => {
          this.cities = result as Cities[];
        }
      );
  }

  onCountryDropdownChange() {
    this.getCitiesList();
  }


}

