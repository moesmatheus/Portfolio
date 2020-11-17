# Portfolio
This is a simple portfolio list using react

### Create React application
> yarn create react-app $appname

### Run Develpment Server
> cd $appname \
> yarn start

### Install github pages for deployment
> npm install gh-pages --save-dev

### Update package.json
Add to top:
> "homepage": "http://{username}.github.io/{repo-name}"

On scripts section use:

> "predeploy": "npm run build", \
> "deploy": "gh-pages -d build"

### Publish
> npm run deploy

### References
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f