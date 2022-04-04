import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';



@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];
  constructor(private deviceService: DeviceService ) { }

  ngOnInit(): void {
  this.getDevices();
  console.log(this.devices)
  }
  getDevices()
  {
  this.deviceService.finAll().subscribe(devices =>{
     this.devices = devices
  } )
  }

  statusDevice(device:any)
  {
  this.deviceService.statusDevice(device.id ,device.status).subscribe(() => {
    device.status = !device.status
  })
  }

  deleteDevice(id:any)
{
  this.deviceService.delete(id).subscribe(() => {
    this.devices = this.devices.filter(devices => devices.id != id)
  })
}


}
