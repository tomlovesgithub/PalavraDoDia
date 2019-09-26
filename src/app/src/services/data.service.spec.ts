import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'

describe('DataService', () => {

  let httpClient: HttpClient;
  let dataService: DataService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should return word', () => {
    // spy on and mock HttpClientModule
    httpClient = TestBed.get(HttpClient);

    const wordMock = {
      origin: {
        word: 'sleepwaler',
        example: 'fcsadf'
      },
      translated: {
        word: 'dsa',
        example: 'dsa odsadffé'
      },
    };
    spyOn(httpClient, 'get').and.returnValue(of(wordMock));
    // use service to get word
    dataService = TestBed.get(DataService);
    const spy = jasmine.createSpy('spy');
    dataService.getWord$().subscribe(spy)
    // verify service returned data
    expect(spy).toHaveBeenCalledWith(wordMock);
    // verify service called correct endpoint
    expect(httpClient.get).toHaveBeenCalledWith('assets/word.json');
  });
});
