import { TestBed, async } from '@angular/core/testing';
import { GreeterComponent } from './greeter.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GreeterComponent
      ],
    }).compileComponents();
  }));
  
  it(`should populate the message when greeted`, async(() => {
    const fixture = TestBed.createComponent(GreeterComponent);
    const greeter = fixture.debugElement.componentInstance;
    greeter.onGreetClick('Magesh');
    fixture.detectChanges();
    expect(greeter.message).toEqual('Hi Magesh, Have a nice day!');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(GreeterComponent);
    const greeter = fixture.debugElement.componentInstance;
    greeter.onGreetClick('Magesh');
    fixture.detectChanges();const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('Hi Magesh, Have a nice day!');
  }));
});
