import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanessaMartinezComponent } from './vanessa-martinez.component';

describe('VanessaMartinezComponent', () => {
  let component: VanessaMartinezComponent;
  let fixture: ComponentFixture<VanessaMartinezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VanessaMartinezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VanessaMartinezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
