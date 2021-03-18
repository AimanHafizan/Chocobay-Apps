import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BK101Page } from './bk101.page';

describe('BK101Page', () => {
  let component: BK101Page;
  let fixture: ComponentFixture<BK101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BK101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BK101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
