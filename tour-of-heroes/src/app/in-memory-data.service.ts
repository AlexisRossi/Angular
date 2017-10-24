import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {ID: 0,  name: 'Zero' },
      {ID: 11, name: 'Hulk'},
      {ID: 12, name: 'Thor'},
      {ID: 13, name: 'Spiderman'},
      {ID: 14, name: 'Iron Man'},
      {ID: 15, name: 'Vision'},
      {ID: 16, name: 'Black Widow'},
      {ID: 17, name: 'HawkEye'},
      {ID: 18, name: 'Black Phanter'},
      {ID: 19, name: 'Ant-Man'},
      {ID: 20, name: 'Captain America'},
      {ID: 21, name: 'Batman'}
    ];
    return {heroes};
  }
}