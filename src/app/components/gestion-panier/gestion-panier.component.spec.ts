import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPanierComponent } from './gestion-panier.component';

describe('GestionPanierComponent', () => {
  let component: GestionPanierComponent;
  let fixture: ComponentFixture<GestionPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
