# CS 262 - Lab 8

This lab is based on [CS 262 Lab 8](https://cs.calvin.edu/courses/cs/262/kvlinden/08is/lab.html).

Lab 8 contains sample queries to get desired data specified in the above lab description.

Also contains a reference implementation of a Suppliers-Parts-Jobs (SPJ) database.
It is similar, but not identical, to the SPJ database used in Calvin University
CS 262 [class 8](https://cs.calvin.edu/courses/cs/262/kvlinden/08is/class.html).

## Answers to lab questions

### Exercise 8.2

c) So what does that `P1.ID < P2.ID` clause do in the last example query?

d) The query that joined the Player table to itself seems rather contrived. 
Can you think of a realistic situation in which you’d want to join a table to itself?

## Database Schema

### Tables:

**Player**(ID, emailAddress, name)

**PlayerGame**(gameID, playerID, score, cash, currentLocation)

**Game**(ID, time)

**PlayerProperties**(gameID, playerID, propertyName)

**PlayerBuildings**(gameID, playerID, buildingType, quantity, propertyName)

--------------------------------------

*Note*: **PlayerBuildings(buildingType)** => “house” or “hotel”



