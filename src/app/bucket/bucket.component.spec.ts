import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListPageComponent } from './bucket.component';

describe('BucketListPageComponent', () => {
  let component: BucketListPageComponent;
  let fixture: ComponentFixture<BucketListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
