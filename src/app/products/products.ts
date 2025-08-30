import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ImageFallbackDirective } from '../image-fallback.directive';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ImageFallbackDirective]
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      title: 'Coffee Machines',
      description: 'Explore our range of high-quality coffee machines for your home or business.',
      imageUrl: 'assets/images/CoffeMachine.jpg',
    },
    {
      id: 2,
      title: 'Controllers & Drives',
      description: 'We offer a variety of controllers and drives, including inverters and VFDs, to power your industrial applications with precision and reliability.',
      imageUrl: 'assets/images/Drives.jpg',
    },
    {
      id: 3,
      title: 'Servo Systems & Encoders',
      description: 'High-precision servo systems and encoders for your automation needs, ensuring accurate positioning and control.',
      imageUrl: 'assets/images/Servo_System.jpg',
    },
    {
      id: 4,
      title: 'HMI / Operator Panels',
      description: 'User-friendly HMI and operator panels for intuitive machine control and real-time monitoring of your processes.',
      imageUrl: 'assets/images/Operator_panel.jpeg',
    }
  ];
}
