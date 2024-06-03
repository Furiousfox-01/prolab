import { Injectable } from '@angular/core';
import JsonData from '../data/project_data.json'
@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { }
  getData():any[]{
    return JsonData;
  }
}
