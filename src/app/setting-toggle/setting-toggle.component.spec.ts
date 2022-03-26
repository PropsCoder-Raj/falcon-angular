import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingToggleComponent } from './setting-toggle.component';

describe('SettingToggleComponent', () => {
  let component: SettingToggleComponent;
  let fixture: ComponentFixture<SettingToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
