import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMateriel } from './detail-materiel';

describe('DetailMateriel', () => {
  let component: DetailMateriel;
  let fixture: ComponentFixture<DetailMateriel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMateriel],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMateriel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
