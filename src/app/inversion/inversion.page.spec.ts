import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InversionPage } from './inversion.page';

describe('InversionPage', () => {
  let component: InversionPage;
  let fixture: ComponentFixture<InversionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
