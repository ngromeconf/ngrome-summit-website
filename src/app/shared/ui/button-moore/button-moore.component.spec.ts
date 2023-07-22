import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonMooreComponent } from './button-moore.component';

describe('ButtonMooreComponent', () => {
  let component: ButtonMooreComponent;
  let fixture: ComponentFixture<ButtonMooreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ButtonMooreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMooreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
