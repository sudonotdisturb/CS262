This sample Monopoly database and set of queries is used in Calvin College
CS 262 [lab 7](https://cs.calvin.edu/courses/cs/262/kvlinden/07is/lab.html).

Tables:

**Player**(ID, emailAddress, name)
**PlayerGame**(gameID, playerID, score, cash, currentLocation)
**Game**(ID, time, status)
**PlayerProperties**(gameID, playerID, propertyName)
**PlayerBuildings**(gameID, playerID, buildingType, quantity, propertyName)

--------------------------------------
**Game**(status): “in-progress” or “finished”
**PlayerBuildings(buildingType)**: “house” or “hotel”
