import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from '@header/header.component';
import { ContactComponent } from '@contact/contact.component';
import { DashboardComponent } from '@dashboard/dashboard.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ContactComponent,
        DashboardComponent
      ],
      imports: [
        NgbModule
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should include the header and the right-hand-side navbar', () => {
    expect(fixture.nativeElement.querySelectorAll('.navbar').length)
      .toEqual(2);
  });
});
