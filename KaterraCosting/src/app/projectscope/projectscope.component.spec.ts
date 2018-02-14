import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectscopeComponent } from './projectscope.component';

describe('ProjectscopeComponent', () => {
  let component: ProjectscopeComponent;
  let fixture: ComponentFixture<ProjectscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectscopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
