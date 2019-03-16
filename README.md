# REST API Boilerplate

<p align="center"><img height="150" width="auto" src="https://i.imgur.com/1kc7nrV.png" /></p>
<p align="center"><b>An ExpressJS based REST API Boilerplate</b></p>

<hr>

## :wrench: Setup

0. Open up your favourite terminal (and navigate somewhere you want to download the repository to) <br><br>
1. Make sure you have NodeJS installed. Test by  entering <br>
$ `node -v` <br>
If this returns a version number, NodeJS is installed. **If not**, get NodeJS <a href="https://nodejs.org/en/download/package-manager/">here</a>. <br><br>
2. Clone the repository and navigate to it. If you have Git installed, type <br>
$ `git clone https://github.com/NLDev/REST-API-Boilerplate.git && cd REST-API-Boilerplate` <br>
If not, download it <a href="https://github.com/NLDev/REST-API-Boilerplate/archive/master.zip">here</a> and extract the ZIP file.<br>
Then navigate to the folder.<br><br>
3. Install all dependencies by typing <br>
$ `npm install`<br><br>
4. Copy `config.template.js` and paste it as `config.js` <br><br>
5. Configure it in your favourite editor by editing `config.json`<br><br>
6. Start it by running <br>
$ `npm start`

**Note:** You also need *cross-env* ($ `sudo npm i -g cross-env`) globally installed as well as *eslint* ($ `sudo npm i -g eslint`) for testing.

<hr>

## :diamond_shape_with_a_dot_inside: Features

- Easy API versioning (/v1/, /v2/)
- Adding routes without touching the init script (app.js)
- Configurable Rate Limiting
- Robots.txt generator
- Error handling
- Logger 
- Production ready memory store for Ratelimiter
- Standard route scheme
- Support for multiple routers
- Route walker to display which route registered with what method

<hr>

## :camera: Screenshots

<img height="500" width="auto" src="http://oi66.tinypic.com/ivwe37.jpg" />

<hr>
