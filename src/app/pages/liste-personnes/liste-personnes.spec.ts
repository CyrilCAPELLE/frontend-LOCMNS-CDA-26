import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePersonnes } from './liste-personnes';

describe('ListePersonnes', () => {
  let component: ListePersonnes;
  let fixture: ComponentFixture<ListePersonnes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePersonnes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListePersonnes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
