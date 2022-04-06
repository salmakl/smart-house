import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  apiUrl ="http://localhost:5000/devices";
  constructor(private http: HttpClient) { }

  finAll(){
    return this.http.get<Device[]>(this.apiUrl);
  }

  delete(id:any){
    return this.http.delete(`${this.apiUrl}/${id}` )
  }

  add(device:any)
  {
    return this.http.post<Device>(this.apiUrl, device);
  }
  
  statusDevice(id:any, status:any)
  {
    return this.http.patch(`${this.apiUrl}/${id}`,{status: !status} )
  }

  update(device:any)
   {
  return this.http.put(`${this.apiUrl}/${device.id}`,device)
   }

}
