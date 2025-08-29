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
      title: 'Repairing and Maintanance of all types of industrial electronics items',
      description: 'We provide expert repair and maintenance services for all types of industrial electronic equipment, ensuring minimal downtime and optimal performance.',
      imageUrl: 'assets/images/services/service1.jpg'
    },
    {
      title: 'PLC, HMI & SCADA programming and commissioning',
      description: 'Our team of experienced engineers can program and commission PLC, HMI, and SCADA systems to meet your specific requirements.',
      imageUrl: 'assets/images/services/service2.jpg'
    },
    {
      title: 'Retrofitting of old machines with latest technology',
      description: 'We can upgrade your old machinery with the latest technology, improving efficiency, safety, and productivity.',
      imageUrl: 'assets/images/services/service3.jpg'
    },
    {
      title: 'Customized new panel manufacturing as per requirement',
      description: 'We design and manufacture custom control panels for a wide range of industrial applications.',
      imageUrl: 'assets/images/services/service4.jpg'
    },
    {
      title: 'Servo and VFD drive commissioning',
      description: 'We provide expert commissioning services for servo and VFD drives, ensuring optimal performance and reliability.',
      imageUrl: 'assets/images/services/service5.jpg'
    },
    {
      title: 'Annual maintanance contract for industries',
      description: 'We offer annual maintenance contracts to keep your industrial automation systems running smoothly and prevent costly breakdowns.',
      imageUrl: 'assets/images/services/service6.jpg'
    }
  ];
}
