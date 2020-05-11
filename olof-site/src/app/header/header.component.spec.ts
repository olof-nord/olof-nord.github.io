import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        NgbCollapseModule
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should render a nav with three elements', () => {
    expect(fixture.nativeElement.querySelectorAll('.nav-item').length)
      .toEqual(3);
  });
});
