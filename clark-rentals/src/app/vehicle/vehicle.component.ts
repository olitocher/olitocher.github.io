import { Component, OnInit } from '@angular/core';
import { ImagesService, VehicleImage } from '../services/images.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [ImagesService]
})
export class VehicleComponent implements OnInit {

  public images: VehicleImage[];

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getVehicleImages();
  }

}
