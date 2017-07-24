import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyBazN2bsQ4nxvqgPz8x8-49mmBZYH2C2y4",
  authDomain: "yencli-56a77.firebaseapp.com",
  databaseURL: "https://yencli-56a77.firebaseio.com/"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
