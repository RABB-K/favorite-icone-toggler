const favoriteButtons = document.querySelectorAll('.favorite-icon');

// Load saved favorite names (like ["120 gm paper", "Watercolor set"])
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Loop through each button
favoriteButtons.forEach(btn => {
  const itemName = btn.dataset.name; // get item name from data attribute

  // Check if this item is in favorites
  if (favorites.includes(itemName)) {
    btn.classList.add('filled');
  }

  // Add click event
  btn.addEventListener('click', () => {
    btn.classList.toggle('filled');

    if (btn.classList.contains('filled')) {
      // Add item name to favorites if not already there
      if (!favorites.includes(itemName)) {
        favorites.push(itemName);
      }
    } else {
      // Remove it if it's being un-favorited
      favorites = favorites.filter(name => name !== itemName);
    }

    // Save updated favorites
    localStorage.setItem('favorites', JSON.stringify(favorites));
  });
});