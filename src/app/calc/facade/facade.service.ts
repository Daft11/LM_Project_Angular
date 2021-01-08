import { FacadeModel } from './facade.model';

export class FacadeService {
  materials: { mdf: string; dsp: string; massive: string } = {
    mdf: 'МДФ',
    dsp: 'ДСП',
    massive: 'Массив',
  };

  covers: {
    pvh: string;
    pet: string;
    lak: string;
    plastic: string;
    paint: string;
    ldsp: string;
  } = {
    pvh: 'Пленка ПВХ',
    pet: 'Пленка ПЭТ',
    lak: 'Лак',
    plastic: 'Пластик',
    paint: 'Краска',
    ldsp: 'Ламинация (ЛДСП)',
  };

  private products: FacadeModel[] = [
    new FacadeModel(
      'resh_blue',
      'Реш Синий',
      '../assets/images/facade/resh_blue_s.jpg',
      this.materials.mdf,
      this.covers.pet
    ),
    new FacadeModel(
      'resh_white',
      'Реш Белый',
      '../assets/images/facade/resh_white_s.jpg',
      this.materials.mdf,
      this.covers.pet
    ),
    new FacadeModel(
      'berline',
      'Берлин>',
      '../assets/images/facade/berlin_s.jpg',
      this.materials.mdf,
      this.covers.pvh
    ),
    new FacadeModel(
      'megion',
      'Мегион',
      '../assets/images/facade/megion_s.jpg',
      this.materials.mdf,
      this.covers.pvh
    ),
    new FacadeModel(
      'asha_white',
      'Аша Белый',
      '../assets/images/facade/asha_white_s.jpg',
      this.materials.dsp,
      this.covers.lak
    ),
    new FacadeModel(
      'asha_green',
      'Аша Зеленый',
      '../assets/images/facade/asha_green_s.jpg',
      this.materials.dsp,
      this.covers.lak
    ),
    new FacadeModel(
      'asha_red',
      'Аша Красный',
      '../assets/images/facade/asha_red_s.jpg',
      this.materials.dsp,
      this.covers.lak
    ),
    new FacadeModel(
      'asha_beige',
      'Аша Бежевый',
      '../assets/images/facade/asha_beige_s.jpg',
      this.materials.dsp,
      this.covers.lak
    ),
    new FacadeModel(
      'nordic',
      'Нордик',
      '../assets/images/facade/nordic_s.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new FacadeModel(
      'birsk',
      'Бирск',
      '../assets/images/facade/birsk_s.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new FacadeModel(
      'fatezh',
      'Фатеж',
      '../assets/images/facade/fatezh_s.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new FacadeModel(
      'rouza',
      'Руза',
      '../assets/images/facade/rouza_s.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new FacadeModel(
      'nevel',
      'Невель',
      '../assets/images/facade/nevel_s.jpg',
      this.materials.massive,
      this.covers.paint
    ),
    new FacadeModel(
      'newport_taupe',
      'Ньюпорт Топо',
      '../assets/images/facade/newport_taupe_s.jpg',
      this.materials.mdf,
      this.covers.pvh
    ),
    new FacadeModel(
      'newport_white',
      'Ньюпорт Белый',
      '../assets/images/facade/newport_white_s.jpg',
      this.materials.mdf,
      this.covers.pvh
    ),
    new FacadeModel(
      'oxford',
      'Оксфорд',
      '../assets/images/facade/oxford_s.jpg',
      this.materials.mdf,
      this.covers.pvh
    ),
    new FacadeModel(
      'petergof',
      'Петергоф',
      '../assets/images/facade/petergof_s.jpg',
      this.materials.mdf,
      this.covers.pvh
    ),
    new FacadeModel(
      'plast',
      'Пласт',
      '../assets/images/facade/plast_s.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new FacadeModel(
      'santiago',
      'Сантьяго',
      '../assets/images/facade/santiago_s.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new FacadeModel(
      'sofia',
      'София',
      '../assets/images/facade/sofia_s.jpg',
      this.materials.dsp,
      this.covers.pvh
    ),
    new FacadeModel(
      'tomari',
      'Томари',
      '../assets/images/facade/tomari_s.jpg',
      this.materials.mdf,
      this.covers.pvh
    ),
  ];

  getProducts() {
    return this.products.slice();
  }
}
