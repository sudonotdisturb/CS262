# CS 262 - Homework 3

This lab is based on [CS 262 Homework 3](https://cs.calvin.edu/courses/cs/262/kvlinden/09is/homework.html).

Homework 3's app expands upon [Homework 2's](https://github.com/sudonotdisturb/CS262/tree/master/homework2) application and fetches and displays data from the CS-262 [data service](https://github.com/sudonotdisturb/CS262-Service).

The service is deployed here: <https://cs262-service.herokuapp.com/>


## Answers to Homework 3 questions

1. What are the (active) URLs for your data service?
  ```
  /players
  /players/[id]
  /playergame
  /playergame/game=[id]
  /playergame/player=[id]
  /player_playergame
  ```

2. Which of these endpoints implement actions that are idempotent? nullipotent?

    All of the endpoints are HTTP `GET` commands, so all of them are both idempotent and nullipotent.

3. Is the service RESTful? If not, why not? If so, what key features make it RESTful?

  * The service is RESTful, because:
    - It is stateless, since no client context is stored on the server between requests; each client request is serviced as any other request,
  regardless of how many other requests were made before it.
    - It uses the HTTP protocol, and is thus optimized for the world wide web.
    - Requests can be sent through URIs, e.g. requesting data from the Player table takes the form of <https://cs262-service.herokuapp.com/players>.
    - It returns data/responses formatted in JSON.

4. Is there any evidence in your implementation of an impedance mismatch?

    No; the data types used in my PostgreSQL database (varchar, integer) can be easily implemented using JavaScript's data types (string, int). In my application, names, email addresses, and current locations are all represented as strings, even though they are varchars in the database implementation. In addition, none of the tables are used as objects or classes in my application, so they preserve their relational quality.
