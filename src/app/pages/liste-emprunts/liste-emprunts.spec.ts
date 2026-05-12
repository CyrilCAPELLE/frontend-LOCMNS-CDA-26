import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmprunts } from './liste-emprunts';

describe('ListeEmprunts', () => {
  let component: ListeEmprunts;
  let fixture: ComponentFixture<ListeEmprunts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEmprunts],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeEmprunts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
