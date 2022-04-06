import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  ResultSearch: Device[] = [];
  device:Device = {
    device: '',
    room: '',
    floor: '',
    status:false
  }

  constructor(private deviceService: DeviceService,private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addDevice()
  {
    this.deviceService.add(this.device).subscribe((ResultSearch) => {
      this.ResultSearch = [ResultSearch, ...this.ResultSearch];
    });

    this.dialog.closeAll();
  }
  }


