/* eslint-disable */
import FavoriteRestaurantIdb from '../../public/data/favorite-restaurant-indexed';
import { createRestaurantItemTemplate } from './templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading"><span>List Favorited Restaurant</span></h2>
      <div id="restaurants" class="restaurant-container">
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;