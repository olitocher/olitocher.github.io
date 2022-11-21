export class ImagesService {

    private images: VehicleImage[] = [
        {
          imageSrc: '../../assets/images/van_image-removebg-preview.png',
          imageAlt: 'van',
          imageName: 'Luton',
          description: 'Long wheel base with tail lift',
          price: 105
        },
        {
          imageSrc: '../../assets/images/van_image-removebg-preview.png',
          imageAlt: 'car',
          imageName: 'Ford Transit',
          description: 'Long wheel base with high top',
          price: 80
        },
        {
          imageSrc: '../../assets/images/van_image-removebg-preview.png',
          imageAlt: 'truck',
          imageName: 'Transit',
          price: 65,
        },
        {
          imageSrc: '../../assets/images/van_image-removebg-preview.png',
          imageAlt: 'truck',
          imageName: 'Car',
          price: 50,
        }
      ]

    getVehicleImages(){
        return this.images;
    }
}

export type VehicleImage = {
    imageSrc: string;
    imageAlt: string;
    imageName: string;
    description?: string;
    price: number;
  }