import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class MasterserviceService {

  Countriesurl:string='EmployeeDetail/Countries';
  CitiesUrl:string='EmployeeDetail/Cities';
  getAllSkillsUrl:string='EmployeeDetail/GetAllSkills';
  employeeDetaiPostUrl:string='EmployeeDetail';
  getAllGendersUrl:string= 'EmployeeDetail/GetAllGenders';

  constructor(private http: HttpClient) { }
  endPointURL: string = environment.endPointURL;

  getCountryList(searchText:string) {
    const url = `${this.endPointURL}${this.Countriesurl}?searchText=${searchText}`;
    return this.http.get(url);
}

getCitiesList(id:number) {
  const url = `${this.endPointURL}${this.CitiesUrl}/${id}`;
  return this.http.get(url);
}

getAllSkills() {
  const url = `${this.endPointURL}${this.getAllSkillsUrl}`;
  return this.http.get(url);
}

postEmployeeDetail(employee:Employee){
  const url = `${this.endPointURL}${this.employeeDetaiPostUrl}`;
  return this.http.post(url,employee);
}

getAllGenders(){
  const url = `${this.endPointURL}${this.getAllGendersUrl}`;
  return this.http.get(url);
}

}
