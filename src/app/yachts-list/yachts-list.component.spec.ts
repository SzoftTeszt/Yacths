import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtsListComponent } from './yachts-list.component';

describe('YachtsListComponent', () => {
  let component: YachtsListComponent;
  let fixture: ComponentFixture<YachtsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YachtsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YachtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
