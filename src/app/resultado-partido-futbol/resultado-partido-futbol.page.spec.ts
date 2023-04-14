import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadoPartidoFutbolPage } from './resultado-partido-futbol.page';

describe('ResultadoPartidoFutbolPage', () => {
  let component: ResultadoPartidoFutbolPage;
  let fixture: ComponentFixture<ResultadoPartidoFutbolPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoPartidoFutbolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoPartidoFutbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
