import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactForm } from './cotact-form';

describe('CotactForm', () => {
  let component: CotactForm;
  let fixture: ComponentFixture<CotactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotactForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
