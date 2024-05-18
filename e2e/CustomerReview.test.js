/* eslint-disable */
Feature('CustomerReview');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Add Customer Review', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.detail');
  I.wait(2);
  I.click(locate('a.detail').first());
  I.seeElement('.reviews-form');
  I.fillField('name', 'E2E Testing');
  I.fillField('review', 'E2E Testing');
  I.click('.reviews-form-submit');
  I.see('E2E Testing', '.restaurant-detail__content__review__item__name');
});