import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonTicketComponent } from './button-ticket.component';

describe('ButtonTicketComponent', () => {
  let component: ButtonTicketComponent;
  let fixture: ComponentFixture<ButtonTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ButtonTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
