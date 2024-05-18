/* eslint-disable */
import CONFIG from '../../../api/config';
const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-container">
        <div class="items-1">
            <span>${restaurant.name}</span>
            <div>
                <img data-src="${CONFIG.BASE_URL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload">
            </div>
            <div class="restaurant-detail__content right-side">
                <h2><span>${restaurant.name}</span></h2>
                <p><span class="text-bold">Rating: <i class="fa fa-star" style="color: #beff0a;"></i></span> ${restaurant.rating}</p>
                <p><span class="text-bold">Address: </span>${restaurant.address}, ${restaurant.city}</p>
                <p><span class="text-bold">Categories: </span>${restaurant.categories.map((category) => category.name).join(', ')}</p>
            </div>
        </div>

        <div class="items-2 restaurant-detail__content bottom-side">
            <h2><span>Information</span></h2>
            <div class="restaurant-detail__content__wrapper">
                <h3><span>Menu</span></h3>
                <p><span class="text-bold">Food: </span>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
                <p><span class="text-bold">Drink: </span>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
            </div>
            <div class="restaurant-detail__content__wrapper">
                <h3><span>Description</span></h3>
                <p>${restaurant.description}</p>
            </div>
            <div class="restaurant-detail__content__wrapper">
                <h3><span>Customer Reviews</span></h3>
                    <div class="restaurant-detail__content__review">
                    </div>
            </div>
            <div id="formReview">
                <h3 class="reviews-subtitle"><span>Write a Review</span></h3>
                <form id="reviewForm" class="reviews-form">
                    <div class="reviews-form-field">
                        <label class="reviews-form-label" for="name">Your name</label>
                        <input class="reviews-form-input" type="text" id="name" name="name" placeholder="Your name..." required>
                    </div>
                    <div class="reviews-form-field">
                        <label class="reviews-form-label" for="review">Give you experience</label>
                        <input class="reviews-form-input" type="text" id="review" name="review" placeholder="Your Review" required>
                    </div>
                    <button class="reviews-form-submit" type="submit">Send Review</button>
                    <div id="offlineMessage"></div>
                </form>
            </div>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-container">
        <div class="restaurant-item__header">
            <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name}"
            <img data-src="${CONFIG.BASE_URL_IMAGE + restaurant.pictureId}">
            <div class="restaurant-item__header__city">
                <p><span class="restaurant-item__header__city__title">${restaurant.city}</span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3>${restaurant.name}</h3>
            <div class="restaurant-item__header__rating">
                <p>Rating : <i class="fa fa-star" style="color: #beff0a;"></i><span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
            </div>
            <p>${restaurant.description}</p>

            <div class="restaurant-item__footer">
                <span><a href="${`/#/detail/${restaurant.id}`}">Detail</a></span>
            </div>
        </div>
       
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};