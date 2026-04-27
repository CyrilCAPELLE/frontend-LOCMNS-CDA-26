import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersonne } from './detail-personne';

describe('DetailPersonne', () => {
  let component: DetailPersonne;
  let fixture: ComponentFixture<DetailPersonne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPersonne],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPersonne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
