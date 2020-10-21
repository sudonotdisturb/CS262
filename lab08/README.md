# CS 262 - Lab 8

This lab is based on [CS 262 Lab 8](https://cs.calvin.edu/courses/cs/262/kvlinden/08is/lab.html).

Lab 8 uses ElephantSQL to create a simple Monopoly database and sample queries.

## Database Schema

### Tables:

**Player**(ID, emailAddress, name)

**PlayerGame**(gameID, playerID, score, cash, currentLocation)

**Game**(ID, time)

**PlayerProperties**(gameID, playerID, propertyName)

**PlayerBuildings**(gameID, playerID, buildingType, quantity, propertyName)

--------------------------------------

Note: **PlayerBuildings(buildingType)** => “house” or “hotel”


This is a reference implementation of a Suppliers-Parts-Jobs (SPJ) database.
It is similar, but not identical, to the SPJ database used in Calvin College
CS 262 [class 8](https://cs.calvin.edu/courses/cs/262/kvlinden/08is/class.html).
