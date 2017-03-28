Simple example of React, Babel and webpack.

Download the files at the root directory.

```
npm install
npm start
```

http://localhost:8080/webpack-dev-server/ or http://localhost:8080/


**Trouble shooting:**

1) Clear NPM's cache:  
sudo npm cache clean -f

2) Install a helper called: 
sudo npm install -g n

3) Install stable NodeJS version:
sudo n stable

Items behind npm start for individual installs

```
npm init
npm install --save react
npm install --save react-dom
npm install --save-dev webpack
npm install webpack-dev-server –g
npm install --save-dev babel-loader
npm install --save-dev babel-core
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react

Run the server:
webpack-dev-server --progress
```
