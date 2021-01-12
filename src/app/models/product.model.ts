export class ProductModel {
  constructor(
    public idName: string,
    public name: string,
    public imgUrl: string,
    public material: string,
    public cover: string,
    public price: number = 0
  ) {}
}
