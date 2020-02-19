import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WrongPage } from './wrong.page';

describe('WrongPage', () => {
  let component: WrongPage;
  let fixture: ComponentFixture<WrongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WrongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
