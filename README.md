This is a proof of concept.

To run this example follow the steps:

run the Backend:

```bash
$ go get
$ go run main.go serve
```
click in the ADMIN URL and add some tables

run the Frontend:

```bash
$ npm install
$ npm start
```
Go to the pocket page and add a record (click the button).

now run in your front end terminal:

```bash
$ npm generate-types
```

It should generate a `db.d.ts` file with the types of your tables.
