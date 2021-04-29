# Gif expert app React

This application will show you the gifs that you searched. The API is from GIPHY.

You can have the API from [GIPHY](https://developers.giphy.com/)

On the file getGifs you will notice that I'm importing a file called **keys.js**

You can create this file on src directory. And in there you will add your GIPHY API like this

```
export const API_KEY = `YOUR_API_KEY`
```

First you have to install the dependecies

```
yarn install
```

After this step you can run the project with this command
```
yarn start
```

This project will show you 10 gifs of the category you are looking for, this project is following the original from the Udemy's course [React: De cero a experto ( Hooks y MERN )](https://www.udemy.com/course/react-cero-experto/) by **Fernando Herrerra** (It is an awesome course, you should try it, I will keep doing this course to learn new stuff).

The original project is focus on functionality and testing component. This project beside doing those topics also I gave some style to the project that way looks better and also to check the diference I could work with doing thoses changes or additions to the project.

If you going to check this project I'm working with the most recent version of React at this moment "react": "^17.0.2". Saying this I could realize that enzyme for this version of React is not officially out so you have to work with **@wojtekmaj/enzyme-adapter-react-17": "^0.6.1"**

But if you have problem doing the test in this version I suggested to work with this version on React and Enzyme

```
"dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"
  },

    "devDependencies": {
    "@testing-library/react-hooks": "^3.2.1",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.2",
    "enzyme-to-json": "^3.4.4"
  }
```

With those dependecies on those versions you shouldn't have problems doing the testing part.

To run test you should use this command

```
yarn test
```
This command will run all the test you have

If you want to do an specific test file you have to options:

with this command
```
yarn test <TEST_FILE_ROUTE>
```

the second option is once you used the command **yarn test** you can press **P** and filter the file, that way you can run only the file you want to do the test.

When I was doing the udemy's course I checked that my autocomplete didn't work on the test files so I have to added this file on the project **jsconfig.json** and add this

```
{ "typeAcquisition": { "include": ["jest"] } }
```

Doing this helps me with the autocomplete on the test files.

