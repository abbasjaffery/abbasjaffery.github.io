/*
  Restaurant reviews for food.html. Reviews are grouped by city, and cities
  appear in the order they first show up in this list.

  Fields:
    city          City name (also used for the jump-list anchor)
    restaurant    Restaurant name
    neighborhood  Neighborhood or area
    visited       Date visited, as YYYY-MM-DD
    dish          The one thing to order
    magnitude     Stellar magnitude rating (a number; lower is brighter):
                    ≤ −1    Sirius-tier, unforgettable
                    0 to 1  excellent
                    2 to 3  solid, would return
                    4 to 5  fine
                    ≥ 6     below naked-eye visibility, skip it
                  Decimals are fine (e.g. 0.4, -1.5).
    note          Two to three sentences
    placeholder   true draws the dashed outline. Set to false once the review is real.
*/
window.FOOD_REVIEWS = [
  {
    city: "[City one]",
    restaurant: "[Restaurant name]",
    neighborhood: "[Neighborhood]",
    visited: "[YYYY-MM-DD]",
    dish: "[Dish to order]",
    magnitude: 2.6,
    note: "[Two-to-three sentence note. What the place is like. When to go.]",
    placeholder: true,
  },
  {
    city: "[City one]",
    restaurant: "[Restaurant name]",
    neighborhood: "[Neighborhood]",
    visited: "[YYYY-MM-DD]",
    dish: "[Dish to order]",
    magnitude: -1.5,
    note: "[Two-to-three sentence note. What the place is like. When to go.]",
    placeholder: true,
  },
  {
    city: "[City two]",
    restaurant: "[Restaurant name]",
    neighborhood: "[Neighborhood]",
    visited: "[YYYY-MM-DD]",
    dish: "[Dish to order]",
    magnitude: 4.3,
    note: "[Two-to-three sentence note. What the place is like. When to go.]",
    placeholder: true,
  },
  {
    city: "[City two]",
    restaurant: "[Restaurant name]",
    neighborhood: "[Neighborhood]",
    visited: "[YYYY-MM-DD]",
    dish: "[Dish to order]",
    magnitude: 0.4,
    note: "[Two-to-three sentence note. What the place is like. When to go.]",
    placeholder: true,
  },
  {
    city: "[City three]",
    restaurant: "[Restaurant name]",
    neighborhood: "[Neighborhood]",
    visited: "[YYYY-MM-DD]",
    dish: "[Dish to order]",
    magnitude: 6.5,
    note: "[Two-to-three sentence note. What the place is like. When to go.]",
    placeholder: true,
  },
  {
    city: "[City three]",
    restaurant: "[Restaurant name]",
    neighborhood: "[Neighborhood]",
    visited: "[YYYY-MM-DD]",
    dish: "[Dish to order]",
    magnitude: 1.0,
    note: "[Two-to-three sentence note. What the place is like. When to go.]",
    placeholder: true,
  },
];
