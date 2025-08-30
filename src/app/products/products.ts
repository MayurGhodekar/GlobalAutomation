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
      title: 'Coffee Machines',
      description: 'Explore our range of high-quality coffee machines for your home or business.',
      imageUrl: 'assets/images/products/Coffee Machines.png',
      models: ['Model A', 'Model B', 'Model C']
    },
    {
      title: 'Controllers & Drives',
      description: 'We offer a variety of controllers and drives, including inverters and VFDs.',
      imageUrl: 'assets/images/products/Controllers & Drives.png',
      models: ['Inverter X', 'VFD Y']
    },
    {
      title: 'Servo Systems & Encoders',
      description: 'High-precision servo systems and encoders for your automation needs.',
      imageUrl: 'assets/images/products/Servo Systems & Encoders.png',
      models: ['Servo Z', 'Encoder W']
    },
    {
      title: 'HMI / Operator Panels',
      description: 'User-friendly HMI and operator panels for intuitive machine control.',
      imageUrl: 'assets/images/products/HMI _ Operator Panels.png',
      models: ['Panel P', 'Panel Q']
    }
  ];
}
