import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationBodyComponent } from './translation-body.component';

describe('TranslationBodyComponent', () => {
  let component: TranslationBodyComponent;
  let fixture: ComponentFixture<TranslationBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
