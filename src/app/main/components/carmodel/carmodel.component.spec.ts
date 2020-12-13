import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarmodelComponent } from './carmodel.component';

describe('CarmodelComponent', () => {
  let component: CarmodelComponent;
  let fixture: ComponentFixture<CarmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmodelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
