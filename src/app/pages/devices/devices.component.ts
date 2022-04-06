import { Component, DoCheck, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDeviceComponent } from 'src/app/pages/add-device/add-device.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];
  constructor(private deviceService: DeviceService, private dialog: MatDialog) { }

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
  console.log(id);
  this.deviceService.delete(id).subscribe(() => {
    this.devices = this.devices.filter(devices => devices.id != id)
  })
}


  openDialog(){
    this.dialog.open(AddDeviceComponent);
  }
}
