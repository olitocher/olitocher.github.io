import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images: carouselImage[] = [
    {
      imageSrc: '../../assets/images/van_image-removebg-preview.png',
      imageAlt: 'van',
      imageName: 'Transit Van',
    },
    {
      imageSrc: '../../assets/images/van_image-removebg-preview.png',
      imageAlt: 'car',
      imageName: 'Small White Car'
    },
    {
      imageSrc: '../../assets/images/van_image-removebg-preview.png',
      imageAlt: 'truck',
      imageName: 'Luton Van'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    
  }


}

export type carouselImage = {
  imageSrc: string;
  imageAlt: string;
  imageName: string;
}
