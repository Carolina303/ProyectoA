import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListempresaPage } from './listempresa.page';

describe('ListempresaPage', () => {
  let component: ListempresaPage;
  let fixture: ComponentFixture<ListempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListempresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
