import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrushInfoPage } from './brush-info.page';

describe('BrushInfoPage', () => {
  let component: BrushInfoPage;
  let fixture: ComponentFixture<BrushInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrushInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
