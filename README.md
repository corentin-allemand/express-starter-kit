## Express starter kit
### Project setup  
#### NodeJs installation
First make sure that you have **node 8.x.x** installed. Then you must to download all dependencies for this project with **npm**. In your terminal, find the project folder and type:
 ```bash
 $ npm install
 ```
_NodeJs website (choose TLS version): https://nodejs.org/en/_ 
#### Run the Express application
Run the server application with the command below:
```bash
$ npm start
```
The command will run some scripts in the following order:

- **killall node**: remove concurrent running modules
- **nodemon -e scss -x "npm run build-css"**: detect all changes of any scss file
- **node-sass --include-path scss views/stylesheets/main.scss public/css/style.css**: build _style.css_ file in the _public/css_ directory from the _views/stylesheets/main.scss_ file
- **cross-env NODE_ENV=development**: set the environment variable _$NODE_ENV_
- **nodemon app.js**: run _nodemon_ to watch _js_ and _html_ files, compile and run the _NodeJs_ application

Check your console if there isn't any error. If the server is running, you can go to `http://localhost:3000` with your web browser.
### Tests
The tests are written in the `./test` folder. They are launched by _mocha_ and we use the _super-test_ module to write them.
```bash
$ npm test
```
### Resources and documentation
- **ExpressJs documentation**: http://expressjs.com/fr/
- **Mocha documentation**: https://mochajs.org/
- **SuperTest documentation**: https://github.com/visionmedia/supertest


![Alt Text](https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif)
