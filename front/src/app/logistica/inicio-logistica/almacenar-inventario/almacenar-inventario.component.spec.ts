import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenarInventarioComponent } from './almacenar-inventario.component';

describe('AlmacenarInventarioComponent', () => {
  let component: AlmacenarInventarioComponent;
  let fixture: ComponentFixture<AlmacenarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlmacenarInventarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmacenarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
