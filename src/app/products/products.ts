import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class ProductsComponent {
  products = [
    {
      title: 'Coffee Machines',
      description: 'Explore our range of high-quality coffee machines for your home or business.',
      imageUrl: 'https://images.unsplash.com/photo-1559496417-e7f45cb29a29?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      models: ['Model A', 'Model B', 'Model C']
    },
    {
      title: 'Controllers & Drives',
      description: 'We offer a variety of controllers and drives, including inverters and VFDs.',
      imageUrl: 'https://images.unsplash.com/photo-1617862329994-4b8a47a1a2b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      models: ['Inverter X', 'VFD Y']
    },
    {
      title: 'Servo Systems & Encoders',
      description: 'High-precision servo systems and encoders for your automation needs.',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-959959a0a185?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      models: ['Servo Z', 'Encoder W']
    },
    {
      title: 'HMI / Operator Panels',
      description: 'User-friendly HMI and operator panels for intuitive machine control.',
      imageUrl: 'https://images.unsplash.com/photo-1562758580-99a46ed8e42e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      models: ['Panel P', 'Panel Q']
    }
  ];
}
