import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { ClaimsPage }               from './home';

let fixture: ComponentFixture<ClaimsPage> = null;
let instance: ClaimsPage = null;

describe('Pages: Home', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([ClaimsPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges();
  })));


  it("Should look for offers nearby", ()=> {
    instance.fetchOffers();
  });
})
