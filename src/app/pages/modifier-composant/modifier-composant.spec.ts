import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierComposant } from './modifier-composant';

describe('ModifierComposant', () => {
  let component: ModifierComposant;
  let fixture: ComponentFixture<ModifierComposant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierComposant],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierComposant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
