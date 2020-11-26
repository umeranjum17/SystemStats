import { Component, OnInit } from '@angular/core';
import { ElectronService } from "../../core/services/electron/electron.service"
@Component({
  selector: 'app-system-stats',
  templateUrl: './system-stats.component.html',
  styleUrls: ['./system-stats.component.scss']
})
export class SystemStatsComponent implements OnInit {

  constructor(private electron: ElectronService) { }
cores:number;
physicalCores:number;
manufacturer:string;
  ngOnInit(): void {
    const data = this.electron.fetchSystemInfo()
    this.cores=data.cores;
this.manufacturer=data.manufacturer;
this.physicalCores=data.physicalCores;
    console.log(data)
  }

}
