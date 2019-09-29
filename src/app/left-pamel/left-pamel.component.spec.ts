import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPamelComponent } from './left-pamel.component';

describe('LeftPamelComponent', () => {
  let component: LeftPamelComponent;
  let fixture: ComponentFixture<LeftPamelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPamelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPamelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
