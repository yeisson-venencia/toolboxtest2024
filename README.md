## INSTRUCTIONS TO RUN THE APP WITH DOCKER

### STEP 1: RUN THE API

From the root directory run the following commands

```
cd api
docker build -f Dockerfile -t toolboxtestapi .
docker run  --name toolboxtestapi -p 3000:3000 toolboxtestapi
```

After that, to see the documentation go to

```
http://localhost:3000/api-docs/
```

### STEP 2: RUN THE WEBAPP

```
cd webapp
docker build -f Dockerfile -t toolboxtestwebapp .
docker run  --name toolboxtestwebapp -p 8080:80 toolboxtestwebapp
```

After that, to see the app running go to

```
http://localhost:8080/
```
