# eit_web_app
## Dependencies
Docker and npm

## Installation
To prepare your computer to run the server:
* clone the repository:
```
cd eit_web_app
```
* build the docker image:
```
docker build . -t eit-web-app
```
* setup express framework for the server:
```
cd production
```
```
npm i express
```
verify that /node_modules and package-lock.json were created
```
cd ..
```

## Running web app locally

```
. local_run_server.sh
```
verify with:
```
docker logs eit_app
```
see in browser at address localhost:8080


