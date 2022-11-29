# warsawjs-workshop-41-gallery

⛩️ WarsawJS Workshop #41 — JavaScript (Basic Level)

## Demo 🎉

<https://piecioshka.github.io/warsawjs-workshop-41-gallery>

## Links

* Place holders
    + <https://placeskull.com/>
    + <https://placeskull.com/200/300>
    + <https://picsum.photos/>
    + <https://picsum.photos/200/300>
* <https://bulma.io/documentation/>
* <https://www.webfx.com/tools/emoji-cheat-sheet/>
* <https://icons8.com/preloaders>
* <https://github.com/piecioshka/innerhtml-vs-innertext-vs-textcontent>

## What subjects can you learn after doing this project?

<details><summary>JavaScript</summary>

* :white_check_mark: Variables `(var, let, const)`
* :white_check_mark: Data Types `(string, number, array)`
* :white_check_mark: Operators `(++, ===, <)`
* :white_check_mark: Functions `(Function Declaration, Method Shorthand Definition)`
* :white_check_mark: Arrays
* :white_check_mark: Objects
* :white_check_mark: Conditions `(if)`
* :white_check_mark: Loops `(for, forEach)`
* :white_check_mark: Error Handling `(try...catch)`
* :warning: Falsy Values `(false, 0, '', NaN, null, undefined)`
* :warning: JSON
* :warning: BOM — Browser Object Model
* :white_check_mark: Date
* :warning: Math
* :white_check_mark: Clocks `(setTimeout, setInterval)`
* :white_check_mark: Comments
* :white_check_mark: DOM Elements `(ClassList API)`

</details>

## Step by step 👣

### Display photos

* [ ]  EDIT: `scripts/main.js`
* [ ]  EDIT: `index.html`
    + [ ]  Link a `main.js` file by `script` tag
* [ ]  EDIT: `scripts/main.js`
    + [ ]  Create function `main()`
    + [ ]  Create list of different URLs to **photos**
    + [ ]  Create loop `for`
    + [ ]  Create `HTMLImageElement` for each array item

### Refactoring

* [ ]  EDIT: `scripts/main.js`
    + [ ]  Create function `renderPhoto()`
        - With `for` loop content
    + [ ]  Create function `renderPhotos()`
        - Use `Array.prototype.forEach`
    + [ ]  Change structure of **photos**
        - Switch from URL to object with `url` property

### Handle empty photos

* [ ]  EDIT: `scripts/main.js`
    + [ ]  Create function `displayMessage()`
        - [ ]  TALK: `innerHTML`, `innerText`, `textContent`
        - [ ]  Use simple strategy with `textContent`
        - [ ]  Use complex strategy with `innerHTML` with Bulma component
    + [ ]  Create function `displayEmptyGalleryMessage()`
    + [ ]  Add condition if an array is empty
    + [ ]  Comment content of **photos** collection

### Handler errors

* [ ]  EDIT: `scripts/main.js`
    + [ ]  Add `null` as next element of **photos**
    + [ ]  Add `try...catch` to catch `Uncaught TypeError`
        - `Cannot read property 'url' of null`

### Loader

* [ ]  EDIT: `images/loader.gif`
* [ ]  EDIT: `scripts/loader.js`
    + [ ]  Create object `loader` with functions: `show()`, `hide()`
* [ ]  EDIT: `index.html`
    + [ ]  Link a `loader.js` file by `script` tag
* [ ]  EDIT: `scripts/loader.js`
    + [ ]  Funkcja `show()`
        - Get reference to outlet container
        - Create `HTMLElement`
    + [ ]  Funkcja `hide()`
        - Remove `HTMLElement` from DOM
* [ ]  EDIT: `scripts/main.js`
    + [ ]  Invoke `loader.show()` and the beginning
    + [ ]  Invoke `loader.hide()` before rendering use `setTimeout`

### Display current time

* [ ]  EDIT: `scripts/main.js`
    + [ ]  Create function `displayCurrentTime()`
    + [ ]  Use `setInterval()` to render time on each second

## Show your support

Give a ⭐️ if this project helped you!

## Related

* Other trainers
    + [by @Kamil Grabek](https://github.com/G3F4/warsawjs-workshop-41)
    + [by @Daniel Karski](https://github.com/dkarski/warsawjs-workshop-41)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020
