import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ImageFallbackDirective } from '../image-fallback.directive';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ImageFallbackDirective]
})
export class ServicesComponent {
  services = [
    {
      title: 'Coffee Machine Sales & Repair',
      description: 'We offer a wide range of coffee machines for sale and provide expert repair services to keep them brewing.',
      imageUrl: 'assets/images/Service1.jpg'
    },
    {
      title: 'Inverter & VFD Repair',
      description: 'Our technicians are skilled in repairing inverters and variable frequency drives (VFDs) from all major brands.',
      imageUrl: 'assets/images/Service2.jpg'
    },
    {
      title: 'Servo Drives & Controllers Repair',
      description: 'We provide comprehensive repair services for servo drives and controllers, ensuring precise and reliable operation.',
      imageUrl: 'assets/images/Service3.jpg'
    },
    {
      title: 'HMI / PLC & Encoder Services',
      description: 'We offer programming, commissioning, and repair services for HMIs, PLCs, and encoders.',
      imageUrl: 'assets/images/Service4.jpg'
    }
  ];
}
