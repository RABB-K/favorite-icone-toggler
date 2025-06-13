# Favorite Icon Toggler

A simple web component to mark items as favorites by toggling heart icons. It helps users keep track of their favorite items with a smooth and persistent toggle functionality.

## Features

- Multiple favorite icons representing different items.
- Toggle between empty (♡) and filled (♥) heart icons.
- Persist favorite selections across sessions using `localStorage`.
- Visual feedback with color changes on toggle.
- Easy integration into any web page.

## Technologies Used

- HTML5 (with `data-name` attributes for item identification)
- CSS3 (for styling and toggle effects)
- JavaScript (for event handling, DOM manipulation, and localStorage persistence)

## How to Use

1. Add favorite icon buttons to your HTML with a unique `data-name` attribute for each item.
2. Load the page to automatically highlight any previously favorited items.
3. Click any heart icon to toggle its favorite status.
4. The favorite state is saved automatically and will persist on future visits.
