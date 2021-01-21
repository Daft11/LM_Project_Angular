export class CalculateService {
  private facadeId: string = null;
  private countertopId: string = null;
  private sizeArray: number[] = null;
  private shapeName: string = null;
  public isReadyToCalc: boolean = false;

  setFacade(facadeId: string): void {
    this.facadeId = facadeId;
    console.log(this.facadeId);
    console.log(this.countertopId);
    console.log(this.sizeArray);
    console.log(this.shapeName);
  }
  setCountertop(countertopId: string): void {
    this.countertopId = countertopId;
    console.log(this.facadeId);
    console.log(this.countertopId);
    console.log(this.sizeArray);
    console.log(this.shapeName);
  }
  setGeometry(shapeName: string, sizeArray: number[]): void {
    this.shapeName = shapeName;
    this.sizeArray = sizeArray;
    console.log(this.facadeId);
    console.log(this.countertopId);
    console.log(this.sizeArray);
    console.log(this.shapeName);
  }
}
