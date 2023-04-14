import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstadisticasJugadoresJuegoPage } from './estadisticas-jugadores-juego.page';

describe('EstadisticasJugadoresJuegoPage', () => {
  let component: EstadisticasJugadoresJuegoPage;
  let fixture: ComponentFixture<EstadisticasJugadoresJuegoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasJugadoresJuegoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstadisticasJugadoresJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
