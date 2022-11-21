import { Component, OnInit } from '@angular/core';
import { ImagesService, VehicleImage } from '../services/images.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ImagesService]
})
export class HomepageComponent implements OnInit {

  public images: VehicleImage[];

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getVehicleImages()
  }


}
