import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstadisticasJugadoresBaloncestoPage } from './estadisticas-jugadores-baloncesto.page';

describe('EstadisticasJugadoresBaloncestoPage', () => {
  let component: EstadisticasJugadoresBaloncestoPage;
  let fixture: ComponentFixture<EstadisticasJugadoresBaloncestoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasJugadoresBaloncestoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstadisticasJugadoresBaloncestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
