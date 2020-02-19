import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectPage } from './correct.page';

describe('CorrectPage', () => {
  let component: CorrectPage;
  let fixture: ComponentFixture<CorrectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
