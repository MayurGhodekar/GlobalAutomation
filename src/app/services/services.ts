import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class ServicesComponent {
  services = [
    {
      title: 'Coffee Machine Sales & Repair',
      description: 'We offer a wide range of coffee machines for sale and provide expert repair services to keep them brewing.',
      imageUrl: 'https://images.unsplash.com/photo-1511920183353-3b2a5d5d37aa?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Inverter & VFD Repair',
      description: 'Our technicians are skilled in repairing inverters and variable frequency drives (VFDs) from all major brands.',
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Servo Drives & Controllers Repair',
      description: 'We provide comprehensive repair services for servo drives and controllers, ensuring precise and reliable operation.',
      imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'HMI / PLC & Encoder Services',
      description: 'We offer programming, commissioning, and repair services for HMIs, PLCs, and encoders.',
      imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0ab232f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
}
