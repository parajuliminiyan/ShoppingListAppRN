# ShoppingList React Native Expo App with Firebase Firestore Integration

Welcome to the ShoppingList React Native Expo app with Firebase Firestore integration! This starter project will help you quickly set up a mobile app using React Native and Expo, and connect it to Firebase Firestore for data storage.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed on your system:

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- **Expo CLI**: If you haven't already installed Expo CLI, you can do so by running:

    ```ShellSession
    npm install -g expo-cli
    ```

- **Firebase Account**: You'll need a Firebase account to set up the Firestore database. You can create one at [firebase.google.com](https://firebase.google.com/).

## Getting Started

1. **Clone the repository and navigate to the project directory**:

    ```ShellSession
    https://github.com/parajuliminiyan/ShoppingListAppRN
    cd ShoppingListAppRN
    ```

2. **Install project dependencies**:

    ```ShellSession
    yarn
    ```

3. **Create a Firebase project and set up Firestore**:
- Go to the [Firebase Console](https://console.firebase.google.com/).
- Create a new project or use an existing one.
- In the project dashboard, click "Firestore Database" in the left sidebar.
- Set up your Firestore database by following the on-screen instructions.

4. **Obtain Firebase Configuration**:
- In the Firebase Console, click on the gear icon ⚙️ in the left sidebar to access project settings.
- Under the "General" tab, scroll down to the "Your apps" section.
- Click on the web app (</>) icon to add a web app to your project.
- Register the app by giving it a nickname (e.g., "web").
- You will be presented with a Firebase configuration object. It should look something like this:

  ```javascript
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };
  ```

5. **Add Firebase Configuration to your app**:
- Open the `firebase/index.js` file in your project directory.
- Replace the placeholder values with the configuration obtained from Firebase:

  ```javascript
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export { app, db, collection, addDoc, getFirestore, getDocs, updateDoc, doc, deleteDoc }
  ```

6. **Start the Expo development server**:

    ```
    yarn start
    ```
7. **Choose how you want to run your app**:
- Scan the QR code with the Expo Go app on your mobile device.
- Press `a` to run the app on an Android emulator.
- Press `i` to run the app on an iOS simulator (Mac only).
- Press `w` to open the app in a web browser (limited functionality).

Now your app is set up and connected to Firebase Firestore. You can start building your app and interacting with the Firestore database.

## Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
