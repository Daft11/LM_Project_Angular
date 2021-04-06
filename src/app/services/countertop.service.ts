import { ProductModel } from '../models/product.model';

export class CountertopService {
  materials: { hpl: string; dsp: string; massive: string; stone: string } = {
    hpl: 'HPL',
    dsp: 'ДСП',
    massive: 'Клееный массив бука',
    stone: 'Искуственный камень',
  };

  covers: { plastic: string; ldsp: string; none: string } = {
    plastic: 'Пластик',
    ldsp: 'Ламинация (ЛДСП)',
    none: '',
  };

  private products: ProductModel[] = [
    new ProductModel(
      'marengo',
      'Маренго',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82113211.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new ProductModel(
      'newportbeige',
      'Ньпортбеж',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82125561.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new ProductModel(
      'rashblue',
      'Рашблю',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_160,h_160,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82156936.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new ProductModel(
      'white',
      'Вайт',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_160,h_160,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82156930.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new ProductModel(
      'nansy',
      'Нэнси',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82156933.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new ProductModel(
      'black',
      'Блэк',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82113207.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new ProductModel(
      'pauder',
      'Паудер',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_90,h_160,c_pad,b_white,d_photoiscoming.png/LMCode/82113209.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new ProductModel(
      'brut',
      'Брут',
      'https://catalogassets-prod.2020-platform.com/lmru_dv120201016165431460243/catalogdata/coveringimages/kitchenru/worktop_brut_s.jpg',
      this.materials.dsp,
      this.covers.ldsp
    ),
    new ProductModel(
      'veresk',
      'Вереск',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_90,w_600,h_600,c_pad,b_white,d_photoiscoming.png/LMCode/82165124.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'nordic',
      'Нордик',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82156942.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'brash',
      'Браш',
      'https://catalogassets-prod.2020-platform.com/lmru_dv120201016165431460243/catalogdata/coveringimages/kitchenru/worktop_brush_s.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'sosna_loft',
      'Сосна Лофт',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82156939.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'frame_light',
      'Фрейм светлый',
      'https://catalogassets-prod.2020-platform.com/lmru_dv120201016165431460243/catalogdata/coveringimages/kitchenru/worktop_frame_light_s.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'frame_dark',
      'Фрейм темный',
      'https://catalogassets-prod.2020-platform.com/lmru_dv120201016165431460243/catalogdata/coveringimages/kitchenru/worktop_frame_dark_s.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'berlin',
      'Берлин',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_90,h_160,c_pad,b_white,d_photoiscoming.png/LMCode/82142096.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'sofia',
      'София',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_90,h_160,c_pad,b_white,d_photoiscoming.png/LMCode/82142093.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'belfast',
      'Бэлфаст',
      'https://catalogassets-prod.2020-platform.com/lmru_dv120201016165431460243/catalogdata/coveringimages/kitchenru/worktop_belfast_s.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'rascher',
      'Рашчер',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_90,h_160,c_pad,b_white,d_photoiscoming.png/LMCode/82142100.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'anna_red',
      'Анна красная',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_160,h_160,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82142102.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'anna_green',
      'Анна зеленая',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_160,h_160,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82142105.jpg',
      this.materials.dsp,
      this.covers.plastic
    ),
    new ProductModel(
      'vulkano',
      'Вулкано',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_90,h_160,c_pad,b_white,d_photoiscoming.png/LMCode/82154964.jpg',
      this.materials.hpl,
      this.covers.plastic
    ),
    new ProductModel(
      '',
      'Массив Бука',
      'https://catalogassets-prod.2020-platform.com/lmru_dv120201016165431460243/catalogdata/coveringimages/kitchenru/worktop_beech_array_s.jpg',
      this.materials.massive,
      this.covers.none
    ),
    new ProductModel(
      'black_stone',
      'Черный камень',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_160,h_160,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82607460.jpg',
      this.materials.stone,
      this.covers.none
    ),
    new ProductModel(
      'white_stone',
      'Белый камень',
      'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_160,h_160,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/82607458.jpg',
      this.materials.stone,
      this.covers.none
    ),
  ];

  getProducts() {
    return this.products.slice();
  }

  getProductById(id: string) {
    return this.products.slice().find((product) => product.idName === id);
  }
}
