# issue-tracker
Issue tracker application [![Circle CI](https://circleci.com/gh/GaborSzalay/issue-tracker.svg?style=svg)](https://circleci.com/gh/GaborSzalay/issue-tracker)

# Running the application
1. run `npm install`
3. run `npm run build`
3. run `npm start`
4. load `http://localhost:1337/`

Written in Angular 4 and TypeScript 2 in order to demonstrate a CRUD model between client and REST-like server.
Still in progress, see [issues](https://github.com/GaborSzalay/issue-tracker/issues) for the upcoming features and bugs.

1. It can create issues that is stored on NodeJS backend side.
2. Issues can be edited
3. Sub-issues can be created under a main issue.
4. Sub-issues can be created under another sub-issue.