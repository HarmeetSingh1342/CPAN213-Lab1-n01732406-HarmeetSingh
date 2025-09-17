# Project Structure – EnvironmentTest

This document explains the main folders and files in the **EnvironmentTest** React Native project.


## Folders

- **android/**  
  Contains all the native Android code (Java/Kotlin and Gradle). This is used when building and running the app on Android devices or emulators.

- **ios/**  
  Contains all the native iOS code (Objective-C/Swift and Xcode). This is used when building and running the app on iPhone or iPad (requires macOS).

- **node_modules/**  
  Stores all external libraries and dependencies installed via `npm` (e.g., React, React Native, and other packages).


## Files

- **App.js**  
  The main React component. This is where the app’s UI starts. Editing this file changes what you see in the app.

- **index.js**  
  The entry point for the app. It registers the root component (`App`) with React Native’s `AppRegistry`.

- **package.json**  
  Contains project metadata (name, version, author), dependencies, and npm scripts used to run the app.

- **app.json**  
  Stores app configuration such as the app name and display name.

- **babel.config.js**  
  Babel configuration file. It tells React Native how to transform modern JavaScript/JSX so it works on mobile.

- **metro.config.js**  
  Configuration file for Metro, the JavaScript bundler used by React Native.

- **.gitignore**  
  Specifies files and folders that should be ignored by Git version control (e.g., `node_modules`).


## Summary

- **Edit `App.js`** → to change the UI.  
- **Run `index.js`** → React Native starts from here.  
- **android/ + ios/** → native mobile code.  
- **package.json** → dependencies + scripts.  
- **node_modules/** → all installed libraries.
