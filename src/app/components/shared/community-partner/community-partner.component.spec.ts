import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunityPartnerComponent } from './community-partner.component';

describe('CommunityPartnerComponent', () => {
  let component: CommunityPartnerComponent;
  let fixture: ComponentFixture<CommunityPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommunityPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
