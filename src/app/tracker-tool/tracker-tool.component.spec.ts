import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerToolComponent } from './tracker-tool.component';

describe('TrackerToolComponent', () => {
  let component: TrackerToolComponent;
  let fixture: ComponentFixture<TrackerToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
