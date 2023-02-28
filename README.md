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

For my example I did create a posts table with the following fields:

``
'json'?: Object | null;
'text'?: string | null;
``

TODO:

- [ ] Better typings (I need more time reading the docs)
- [ ] Better error handling
- [ ] Make it more generic (tables with some diferent names or diferent casing may break)
