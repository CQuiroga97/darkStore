import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDespachosComponent } from './ver-despachos.component';

describe('VerDespachosComponent', () => {
  let component: VerDespachosComponent;
  let fixture: ComponentFixture<VerDespachosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerDespachosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerDespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
