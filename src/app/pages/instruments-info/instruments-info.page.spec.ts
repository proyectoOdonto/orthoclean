import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstrumentsInfoPage } from './instruments-info.page';

describe('InstrumentsInfoPage', () => {
  let component: InstrumentsInfoPage;
  let fixture: ComponentFixture<InstrumentsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstrumentsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
