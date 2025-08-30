import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ImageFallbackDirective } from '../image-fallback.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ImageFallbackDirective, RouterLink]
})
export class ServicesComponent {
  services = [
    {
      title: 'Custom Automation Solutions',
      description: 'Tailored automation systems designed to meet your unique business needs, from concept to implementation.',
      imageUrl: 'assets/images/Service1.jpg'
    },
    {
      title: 'Advanced Drive & Motor Control',
      description: 'Expert integration and optimization of VFDs, inverters, and motor controllers for peak performance.',
      imageUrl: 'assets/images/Service2.jpg'
    },
    {
      title: 'Precision Motion & Robotics',
      description: 'Implementing high-precision servo systems and robotics for complex manufacturing and automation tasks.',
      imageUrl: 'assets/images/Service3.jpg'
    },
    {
      title: 'Intelligent Control Systems & HMI',
      description: 'Developing intuitive HMI and robust PLC control systems for seamless machine operation and monitoring.',
      imageUrl: 'assets/images/Service4.jpg'
    }
  ];
}
