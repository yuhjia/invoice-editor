# Invoice Editor
Implemented based on these requirements:
```
Build an invoice editor that allows a user add, edit, or remove line items according to the text-based mockup below.
Pricing should be updated on-the-fly as line items are added or edited. Don't worry about persisting invoices.

Item                      Qty     Price       Total
--------------------------------------------------------
Widget                   [ 2 ]  [ $10.00 ]  [ $20.00 ] x
Cog                      [ 2 ]  [ $15.99 ]  [ $31.98 ] x
[ New Item ]             [   ]  [        ]  [        ]

                                    --------------------
                                    Subtotal      $51.98
                                    Tax (5%)       $2.60
                                    Total         $54.58
                                    --------------------

Requirements:

  - ReactJS
  - Redux
  - ES6/7 JS
  - Webpack
```

## Setup and Install

This project is bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app)

```
$ npm install
$ npm start
```

Serves locally at http://localhost:3000.

## Test

```
$ npm test
```

create-react-app uses jest as the test-runner.

## Demo

![invoice-editor.gif](https://bitbucket.org/repo/9dxa5y/images/1076541038-invoice-editor.gif)