import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionNotFoundComponent } from './session-not-found.component';

describe('SessionNotFoundComponent', () => {
  let component: SessionNotFoundComponent;
  let fixture: ComponentFixture<SessionNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
