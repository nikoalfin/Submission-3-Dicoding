/* eslint-disable */
Feature('LikingRestaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

const likingRestaurant = async (I) => {
    I.amOnPage('/');
  
    I.seeElement('.detail');
    I.wait(2);
    I.click(locate('a.detail').first());
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-container');
  };
  Scenario('liking one restaurant', async ({ I }) => {
    I.wait(2);
    await likingRestaurant(I);
  });
  
  Scenario('Unliking one restaurant', async ({ I }) => {
    I.wait(2);
    await likingRestaurant(I);
  
    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-container');
    I.click(locate('.restaurant-item__footer a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.see('List Favorited Restaurant', '.content__heading');
});