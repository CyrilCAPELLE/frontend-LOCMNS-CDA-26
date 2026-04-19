import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComposant } from './detail-composant';

describe('DetailComposant', () => {
  let component: DetailComposant;
  let fixture: ComponentFixture<DetailComposant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailComposant],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComposant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
