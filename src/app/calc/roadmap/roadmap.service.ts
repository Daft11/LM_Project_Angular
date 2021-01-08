import { stepModel } from './step.model';

export class RoadmapService {
  private roadMap: stepModel[] = [
    new stepModel('facade', 'facade.svg', 'Фасад', 'Выбрать фасады'),
    new stepModel(
      'countertop',
      'countertop.svg',
      'Столешница',
      'Выбрать столешницу'
    ),
    new stepModel(
      'geometry',
      'geometry.svg',
      'Размеры',
      'Указать размер и расположение кухни'
    ),
    new stepModel('result', 'calculator.svg', 'Просчет', 'Получить результат'),
  ];

  getRoadmap() {
    return this.roadMap.slice();
  }
}
