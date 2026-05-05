import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaludoComponent } from './saludo';

describe('SaludoComponent', () => {
  let component: SaludoComponent;
  let fixture: ComponentFixture<SaludoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaludoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener el mensaje inicial', () => {
    expect(component.mensaje).toBe('Hola CI/CD');
  });

  it('debería cambiar el mensaje', () => {
    component.cambiarMensaje('Nuevo mensaje');
    expect(component.mensaje).toBe('Nuevo mensaje');
  });
});