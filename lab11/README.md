# CS 262 - Lab 11

This lab is based on [CS 262 Lab 11](https://cs.calvin.edu/courses/cs/262/kvlinden/11quality/lab.html).

# Markdown Formatting of Code Review

**Modules checked:**

*App.js*
- "Freespace," "nunito," and "Nunito" were labeled as typos.

*home.js*

-"Knollcrest," "Uppercrust," "Peet" were labeled as typos.

*about.js*
- Names of teammates were labeled as typos.

*map.js*
- "redmarker", "bluemarker," etc. are labeled as typos.

*global.js*
- "nunito" was labeled as a typo.


**Changes made:**

- *map.js*: Changed "redmarker" to "redMarker" to meet lowerCamelCase standards

- *report.js*: Changed local variable declaration from "var" to "let" (based on Google Javascript Style)

- Deleted Stylesheet import from several files, since it was not being used in them

**Changes I chose not to make:**

Did not change typos where the names were names of location, people, or fonts (i.e. "Freespace," "Uppercrust," or "nunito"), since their spelling was correct (just not in the dictionary sense).

**Notes:**

- I used VS Code to check whether or not certain libaries were being used

- I used Intellij Community to re-format the code and perform the code analysis (my analysis only brought up typos so I'm not sure if there were other bugs/errors it couldn't detect)
