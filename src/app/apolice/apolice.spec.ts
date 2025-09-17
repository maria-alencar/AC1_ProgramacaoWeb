import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apolice } from './apolice';

describe('Apolice', () => {
  let component: Apolice;
  let fixture: ComponentFixture<Apolice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Apolice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apolice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
