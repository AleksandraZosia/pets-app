# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# Pet Document Manager

## Technical Requirements

### Database

- Planning to use either SQLite or Realm for local database storage
- Requirements:
  - Store pets and related documents
  - Query capabilities
  - Image storage
  - Document storage
  - Filter documents by pet
  - Pet should have a name
  - Pet should have a nullable birth date
  - Pet should have a nullable breed
  - Pet should have a nullable species
  - Pet should have a nullable gender
  - Pet should have a nullable color
  - Pet should have a nullable notes
  - Pet should have an id
  - Pet should have a nullable imageUri (for the pet image)
  - Pet should have events array
  - Event should have nullable documents array (or array of documents ids/uris)?
  - Event should have nullable notes
  - Event should have a name
  - Event should have a nullable date
  - Event should have a nullable location
  - Event should have an id

### Navigation

- Using expo-router for application navigation

### Media Handling

- **Image Management:**
  - Expo ImagePicker for adding images and taking photos within the app
  - React Native Documents Picker for handling both images and documents
- **Camera Integration:**
  - Expo Camera API for in-app photo capture

## Libraries

- [expo-router](https://expo.github.io/router/docs/)
- [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [React Native Document Picker](https://react-native-documents.github.io/docs/sponsor-only/intro)
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
