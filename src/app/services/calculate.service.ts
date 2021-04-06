import { Subject } from 'rxjs';

export class CalculateService {
  public selectionChanged = new Subject();
  private facadeId = null;
  private countertopId = null;
  private sizeArray: number[] = null;
  private shapeName: string = null;
  public isReadyToCalc: boolean = false;

  setFacadeId(facadeId: string): void {
    this.facadeId = facadeId;
    this.selectionChanged.next('facade');
    this.allSetCheck();
  }
  setCountertopId(countertopId: string): void {
    this.countertopId = countertopId;
    this.selectionChanged.next('countertop');
    this.allSetCheck();
  }
  setGeometry(shapeName: string, sizeArray: number[]): void {
    this.shapeName = shapeName;
    this.sizeArray = sizeArray;
    this.allSetCheck();
  }

  getFacadeId() {
    return this.facadeId;
  }

  getCoutertopId() {
    return this.countertopId;
  }

  allSetCheck() {
    if (
      this.facadeId &&
      this.countertopId &&
      this.sizeArray &&
      this.shapeName
    ) {
      this.isReadyToCalc = true;
      this.logParametrs();
    } else {
      this.isReadyToCalc = false;
      this.logParametrs();
    }
  }

  logParametrs() {
    console.log({
      facadeId: this.facadeId,
      countertopId: this.countertopId,
      sizeArray: this.sizeArray,
      shapeName: this.shapeName,
      isReadyToCalc: this.isReadyToCalc,
    });
  }
}
