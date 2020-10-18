# CS 262 - Lab 7

This lab is based on [CS 262 Lab 7](https://cs.calvin.edu/courses/cs/262/kvlinden/07is/lab.html).

Lab 7 uses ElephantSQL to create a simple Monopoly database and sample queries.

## Database Schema

### Tables:

**Player**(ID, emailAddress, name)

**PlayerGame**(gameID, playerID, score, cash, currentLocation)

**Game**(ID, time)

**PlayerProperties**(gameID, playerID, propertyName)

**PlayerBuildings**(gameID, playerID, buildingType, quantity, propertyName)

--------------------------------------

Note: **PlayerBuildings(buildingType)** => “house” or “hotel”
