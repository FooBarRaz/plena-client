import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { AboutPage }               from './about';

let fixture: ComponentFixture<AboutPage> = null;
let instance: any = null;

describe('Pages: About', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([AboutPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges();
  })));

  it('should create the hello ionic page', async(() => {
    expect(instance).toBeTruthy();
  }));

  it("should show you what it's all about", async(() => {
    let $title = document.querySelector('ion-title');
    expect($title.textContent).toContain('About nothing');

    instance.setWhatItsAllAbout('foo');
    fixture.detectChanges();

    expect($title.textContent).toContain('About foo');
  }))

});
