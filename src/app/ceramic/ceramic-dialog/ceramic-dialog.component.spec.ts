import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicDialogComponent } from './ceramic-dialog.component';

describe('CeramicDialogComponent', () => {
  let component: CeramicDialogComponent;
  let fixture: ComponentFixture<CeramicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
