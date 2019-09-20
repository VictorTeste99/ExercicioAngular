import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoComponeteComponent } from './segundo-componete.component';

describe('SegundoComponeteComponent', () => {
  let component: SegundoComponeteComponent;
  let fixture: ComponentFixture<SegundoComponeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoComponeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoComponeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
