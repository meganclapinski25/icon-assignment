# Icon Assignment

A React Native (Expo) app for browsing cat and dog breeds and their traits.

## Features

- **Home** – Welcome screen
- **Cats** – List of cat breeds; tap a breed to view its traits
- **Dogs** – List of dog breeds; tap a breed to view its traits
- **Breed details** – Trait ratings (e.g. affection, shedding, playfulness) with a star-style display

Breed data is loaded from `cat-and-dog-breeds.json`.

## Tech stack

- [Expo](https://expo.dev/) (~54)
- React Native
- [React Navigation](https://reactnavigation.org/) (bottom tabs + native stack)
- [Expo Vector Icons](https://icons.expo.fyi/) (Ionicons)

## Setup

1. Clone the repo and go into the project folder:
   ```bash
   cd icon-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npm start
   ```

4. Run on a device or simulator:
   - **iOS:** press `i` in the terminal or run `npm run ios`
   - **Android:** press `a` in the terminal or run `npm run android`
   - **Web:** press `w` in the terminal or run `npm run web`

You can also scan the QR code with the **Expo Go** app on your phone.

## Project structure

```
icon-assignment/
├── App.js              # Root navigator (stack + tabs)
├── index.js            # Entry point
├── app.json            # Expo config
├── cat-and-dog-breeds.json
├── screens/
│   ├── CatScreen.js    # Cat breed list
│   ├── DogScreen.js    # Dog breed list
│   └── BreedDetails.js # Breed trait details
└── assets/             # Icons, splash, etc.
```

## License

Private.
