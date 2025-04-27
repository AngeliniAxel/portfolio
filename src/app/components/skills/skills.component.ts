import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'skills',
  imports: [NgFor, CarouselModule, TranslatePipe],
  schemas: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', img: 'assets/images/logos/html-logo.svg' },
    { name: 'CSS', img: 'assets/images/logos/css-logo.svg' },
    { name: 'Bootstrap', img: 'assets/images/logos/bootstrap.svg' },
    { name: 'Javascript', img: 'assets/images/logos/js-logo.svg' },
    { name: 'Typescript', img: 'assets/images/logos/ts-logo.svg' },
    { name: 'Angular', img: 'assets/images/logos/angular-logo.svg' },
    { name: 'React', img: 'assets/images/logos/react-logo.svg' },
    { name: 'Node', img: 'assets/images/logos/nodejs-logo.svg' },
    { name: 'Express', img: 'assets/images/logos/express-logo.png' },
    { name: 'MySQL', img: 'assets/images/logos/mysql-logo.svg' },
    { name: 'PostgreSQL', img: 'assets/images/logos/postgresql-logo.svg' },
    { name: 'MongoDB', img: 'assets/images/logos/mongodb-logo.svg' },
  ];

  breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  customOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
    },
    slideBy: 1,
  };
}
