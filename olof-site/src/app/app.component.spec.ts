import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from '@header/header.component';
import { ContactComponent } from '@contact/contact.component';
import { DashboardComponent } from '@dashboard/dashboard.component';
import { AboutMeComponent } from '@about-me/about-me.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ContactComponent,
        DashboardComponent,
        AboutMeComponent
      ],
      imports: [
        NgbModule,
        RouterTestingModule
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should include the header navbar', () => {
    expect(fixture.nativeElement.querySelectorAll('.navbar').length)
      .toEqual(1);
  });
});
