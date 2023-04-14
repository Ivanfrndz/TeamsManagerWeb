import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadoPartidoBaloncestoPage } from './resultado-partido-baloncesto.page';

describe('ResultadoPartidoBaloncestoPage', () => {
  let component: ResultadoPartidoBaloncestoPage;
  let fixture: ComponentFixture<ResultadoPartidoBaloncestoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoPartidoBaloncestoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoPartidoBaloncestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
