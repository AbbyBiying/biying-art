import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkTableComponent } from './my-table.component';

describe('ArtworkTableComponent', () => {
  let component: ArtworkTableComponent;
  let fixture: ComponentFixture<ArtworkTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
