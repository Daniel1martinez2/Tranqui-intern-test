# Getting Started with the test

In the project directory, you can install using yarn:

### `yarn`

And then you should be able to run it using:

### `yarn watch:all`

## You must fulfill the following requirements

### Backend:
- [X] You must add an endpoint that returns a json array that represents a random list of names between 5 and 8 elements.
- [X] The names must be realistic, not just random strings.
- [X] You must add an endpoint that updates the file `server/counter.txt` with a counter each time a request for a particular name is received.
  - [X] If the name didn't previously exist in the file, create a new line and start counting.
  - [X] If the name already exists, update the counter.
  - [X] You can see the initial file for an example.

### Frontend:
- [ ] You must request the json array from the backend when the application is loaded, and also refresh the list every 5 seconds.
- [ ] You must render the array as a button list.
- [ ] Each time the user presses a name/button, send a request to the counter endpoint to update the counter for that person.
- [ ] You must use MaterialUI
