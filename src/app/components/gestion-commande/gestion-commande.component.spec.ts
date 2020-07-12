import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCommandeComponent } from './gestion-commande.component';

describe('GestionCommandeComponent', () => {
  let component: GestionCommandeComponent;
  let fixture: ComponentFixture<GestionCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
