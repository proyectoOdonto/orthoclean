import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChronometersPage } from './chronometers.page';

describe('ChronometersPage', () => {
  let component: ChronometersPage;
  let fixture: ComponentFixture<ChronometersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronometersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChronometersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
