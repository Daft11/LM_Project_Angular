export class stepModel {
  constructor(
    public name: string,
    public imgUrl: string,
    public description: string,
    public whatToDoDescription: string,
    public isComplete: boolean = false,
    public isActive: boolean = false
  ) {}
}
