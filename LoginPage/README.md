# LoginPage 
## First,Setup for the Environment For the React Native:
### 1)Install the NodeJS Software
### 2)Install Visual Studio Code
### 3)Install Android Studio for Preview 
## Second->Project Setup for the create the new folder 
### 1)Install relevant library for React Native in the  command terminal => npm install -g expo-cli
### 2)cd for the file and then install npm packages for full dependancy .Be caution to choose right template for typescript .tsx
### 3)Install the library for the Requirement which i needed so Formik -npm install formik and similarly Install the library for the Requirement which i needed so Yup -npm install yup 
## Run the project:
### 1)expo start for the run the terminal command.Make sure need to have setup the android studio for virtual SDK Manager for the preview check based on the your convienent pixel for google and that expo open on the virtual devices it like on the mobile phone ,even you can open the mobile also only required to scan the QR code for the expo. You  Need to be Install the Expo App in PlayStore.
### 2)After the run the project u work on the code.

## Design:
### 1)Formik used for forming handling ,and it can simplify for the form creation,Management of the form based on the user data that is input ,even can be used erro handling
### 2)Yup:Schema Based form library,it can be used in the Email and password for the minimum Length
### Password  strength Indicator is used for user can be dynamically identify the length of the character or numbers in the input field. beneficial user to make the strong password in real time scenario
### 3)State Mangagement used with usestate because used for the managing the password ,and also update the password by the user
### For styling can be used in the React Native in the  StyleSheet

## Assumption:
### 1)based on the assumption taken only the minimum character of the length in the password i focussed atleast minimum 6 characters but other factor uppercase lowercase many like not used in assumption
### 2)No backend provided ,i did on the frontend application make sure once user done in the login form it can be getting alert messages 
### 3)And also No error Handling Response are can be used because error handling related to server communication in the backend.

