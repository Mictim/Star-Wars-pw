# Star Wars

STAR WARS web page using the information from the [SWAPI] API (https://swapi.dev/ "SWAPI documentation").

The developed website is a website with information about the Star Wars ships and their pilots. The ship list is the one obtained from the API.

The registration screen allows users to register through **Localstorage**, and log in later. The ship list is only visible to registered users.

It also shows a list of the actors, with details on what ships they can fly and the movies they appear in.

## Demo

![star wars clone](./src/assets/gifs/DemoProject.gif)

## Instalación

Use the package manager [npm](https://docs.npmjs.com/) for installation.

```bash
# install dependencies
npm install

# Runs the app in the development mode
npm start

# Runs the app in the development mode.
npm run build
```

## Objetivos

Create a STAR WARS page using:

- [REACT](https://es.reactjs.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- [Axios](https://axios-http.com/docs/intro)
- [Custom Hooks](https://es.reactjs.org/docs/hooks-custom.html)

## Test

```bash
# Launches the playwright tests.
npm test
```

## Allure Report for Test Execution

```bash
# Launches the allure report page
npm allure-report
```

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
