import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MescontactsPage } from './mescontacts.page';

describe('MescontactsPage', () => {
  let component: MescontactsPage;
  let fixture: ComponentFixture<MescontactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MescontactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MescontactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
