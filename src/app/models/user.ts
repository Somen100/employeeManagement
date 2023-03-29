export class Employee{
  employeeId: number=0;
  firstName: string='';
  lastName:  string='';
  email: string='';
  mobile: string='';
  dob: Date|any;
  genderId: number=0;
  address: string='';
  countryId: number=0;
  cityId: number=0;
  skillId: number=0;
  employeeSkills: EmployeeSkills[] = [];
  otherCityName: string='';
  checked:boolean=false;
  skillchecked:boolean=false;

}

export class Country{
  countryId:number=0;
  countryName: string='';
}

export class Cities{
  cityId:number=0;
  cityName: string='';
  countryId:number=0;
}

export class Skills
    {
      skillId :number=0;
      skillName :string='';
      checked:boolean=false;
    }

    export class Gender
    {
      genderId :number=0;
      genderName :string='';
    }   

  export class EmployeeSkills{
    employeeId: number=0;
    skillId:number=0;
    //isselected:boolean=false;
  }  

  export interface IBreadCrumb {
    label: string;
    url: string;
  }