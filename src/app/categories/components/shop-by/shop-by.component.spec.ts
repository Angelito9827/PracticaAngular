import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByComponent } from './shop-by.component';

describe('ShopByComponent', () => {
  let component: ShopByComponent;
  let fixture: ComponentFixture<ShopByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopByComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
