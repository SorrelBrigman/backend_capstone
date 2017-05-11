//SQL query to get all reviews from users who rating a restaurant a certain way:
// select * from reviews
// join users on users.id = reviews.user_id
// where reviews.user_id in (select users.id from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating <= 2
// order by reviews.rating);



//SQL query to get reviews for a certain restaurant based on rating of another restaurant
// select * from reviews
// join users on users.id = reviews.user_id
// where reviews.user_id in (select users.id from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating >= 4
// order by reviews.rating) and reviews.restaurant_id ='husk-nashville';
