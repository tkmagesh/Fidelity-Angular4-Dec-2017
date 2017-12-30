/*import { AppPage } from './app.po';

describe('first-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});*/

import { browser, by, element } from 'protractor';
describe('Greeter', () => {
  

  beforeEach(() => {
    return browser.get('/');
  });

  it('should display welcome message', () => {
  	let txtBox = element(by.id('txtName'));
  	txtBox.sendKeys('Magesh');

  	let button = element(by.buttonText('Greet'));
    button.click();

    expect(element(by.css('div')).getText()).toEqual('Hi Magesh, Have a nice day!');
  });
});