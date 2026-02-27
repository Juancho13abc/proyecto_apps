import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componetes1 } from './componetes1';

describe('Componetes1', () => {
  let component: Componetes1;
  let fixture: ComponentFixture<Componetes1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componetes1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componetes1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
