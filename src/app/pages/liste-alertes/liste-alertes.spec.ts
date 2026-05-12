import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAlertes } from './liste-alertes';

describe('ListeAlertes', () => {
  let component: ListeAlertes;
  let fixture: ComponentFixture<ListeAlertes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAlertes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeAlertes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
