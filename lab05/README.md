# CS 262 - Lab 5

This lab is based on [CS 262 Lab 5](https://cs.calvin.edu/courses/cs/262/kvlinden/05design/lab.html), which is based on NetNinja's 
[Reviews application](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ) (videos #24-26).

Lab 5's app implements basic navigation between two pages: Home and ReviewDetails. Touchable components in the Home screen navigate to the ReviewDetails screen, which displays information based on which component was tapped.

Getting this code to run required:
- Doing the upgrades specified in labs 1 and 4, along with homework 1.
-- Run `npm install` to install required packages.
-- Run `npm install @react-navigation/native @react-navigation/stack` to install navigation libraries.
-- Run `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view` to install navigation core utilities.
- Upgrading to ReactNavigation 5 (see <https://reactnavigation.org/docs/upgrading-from-4.x/>).
- Skipped forms and modal input.
