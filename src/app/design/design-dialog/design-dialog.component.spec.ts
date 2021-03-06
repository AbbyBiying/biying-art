import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDialogComponent } from './design-dialog.component';

describe('DesignDialogComponent', () => {
  let component: DesignDialogComponent;
  let fixture: ComponentFixture<DesignDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
