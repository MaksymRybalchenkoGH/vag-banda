import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTitleBlockComponent } from './company-title-block.component';

describe('CompanyTitleBlockComponent', () => {
  let component: CompanyTitleBlockComponent;
  let fixture: ComponentFixture<CompanyTitleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTitleBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTitleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
