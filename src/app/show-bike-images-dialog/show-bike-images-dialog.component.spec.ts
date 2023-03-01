import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBikeImagesDialogComponent } from './show-bike-images-dialog.component';

describe('ShowBikeImagesDialogComponent', () => {
  let component: ShowBikeImagesDialogComponent;
  let fixture: ComponentFixture<ShowBikeImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBikeImagesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBikeImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
