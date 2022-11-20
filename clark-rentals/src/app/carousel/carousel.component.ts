import { Component, Input, OnInit } from '@angular/core';
import { carouselImage } from '../homepage/homepage.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() carouselImages: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;


  ngOnInit(): void {
    console.log(this.carouselImages);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.carouselImages.length - 1;
    }
    else {
      this.selectedIndex --;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.carouselImages.length - 1){
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex ++;
    }
  }

}
