import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 0,  name: 'Zero' },
      {id: 11, name: 'Hulk'},
      {id: 12, name: 'Thor'},
      {id: 13, name: 'Spiderman'},
      {id: 14, name: 'Iron Man'},
      {id: 15, name: 'Vision'},
      {id: 16, name: 'Black Widow'},
      {id: 17, name: 'HawkEye'},
      {id: 18, name: 'Black Phanter'},
      {id: 19, name: 'Ant-Man'},
      {id: 20, name: 'Captain America'},
      {id: 21, name: 'Batman'}
    ];
    return {heroes};
  }
}
