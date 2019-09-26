import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'
import { spyOnClass } from 'jasmine-es6-spies'

import { TranslationBodyComponent } from './translation-body.component';
import { DataService } from '../../services/data.service';

describe('TranslationBodyComponent', () => {
  let component: TranslationBodyComponent;
  let fixture: ComponentFixture<TranslationBodyComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationBodyComponent ],
      providers: [
        { provide: DataService, useFactory: () => spyOnClass(DataService)}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationBodyComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    dataService = TestBed.get(DataService)
    const instance = {
      "list": [
        {
          "origin": {
            "word": "Sonâmbulo",
            "example": "acordar um sonâmbulo"
          },
          "translated": {
            "word": "Sleepwalker",
            "example": "to wake up a sleepwalker"
          }
        },
        {
          "origin": {
            "word": "Sombrio",
            "example": "Eu o observei de um canto sombrio."
          },
          "translated": {
            "word": "Shadowy",
            "example": "I watched him from a shadowy corner."
          }
        },
        {
          "origin": {
            "word": "concorrente",
            "example": "Nico é um concorrente feroz..."
          },
          "translated": {
            "word": "competitor",
            "example": "Nico is one feirce competitor..."
          }
        },
        {
          "origin": {
            "word": "4",
            "example": "4"
          },
          "translated": {
            "word": "4",
            "example": "4"
          }
        },
        {
          "origin": {
            "word": "5",
            "example": "5"
          },
          "translated": {
            "word": "5",
            "example": "5"
          }
        }
      ]
    };
    dataService.getWord$.and.returnValue(of(instance));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(fixture.nativeElement.querySelector('.pageTitle').innerText).toBe('Palavra Do Dia');
  });

  it('should have origin text box', () => {
    expect(fixture.nativeElement.querySelector('.originText')).toBeTruthy();
  });

  it('should have translated text box', () => {
    expect(fixture.nativeElement.querySelector('.translatedText')).toBeTruthy();
  });

  it('should have origin text', () => {
    expect(fixture.nativeElement.querySelector('.originText').querySelector('.word').innerText).toBe('sonâmbulo');
  });

  it('should have origin example', () => {
    expect(fixture.nativeElement.querySelector('.originText').querySelector('.example').innerText).toBe("'acordar um sonâmbulo'");
  });

  it('should have translated text', () => {
    expect(fixture.nativeElement.querySelector('.translatedText').querySelector('.word').innerText).toBe('sleepwalker');
  });

  it('should have translated example', () => {
    expect(fixture.nativeElement.querySelector('.translatedText').querySelector('.example').innerText).toBe("'to wake up a sleepwalker'");
  });

});
