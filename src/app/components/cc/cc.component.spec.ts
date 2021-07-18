import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCComponent } from './cc.component';

describe('CCComponent', () => {
  let component: CCComponent;
  let fixture: ComponentFixture<CCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
