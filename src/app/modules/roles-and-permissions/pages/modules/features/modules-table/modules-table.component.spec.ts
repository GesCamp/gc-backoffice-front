import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesTableComponent } from './modules-table.component';

describe('ModulesTableComponent', () => {
  let component: ModulesTableComponent;
  let fixture: ComponentFixture<ModulesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
