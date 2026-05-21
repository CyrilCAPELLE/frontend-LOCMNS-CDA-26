import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMateriels } from './liste-materiels';

describe('ListeMateriels', () => {
  let component: ListeMateriels;
  let fixture: ComponentFixture<ListeMateriels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMateriels],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeMateriels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
