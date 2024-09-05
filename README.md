## INSTRUNTIONS TO RUN THE APP WITH DOCKER

### STEP 1: RUN THE API

```
cd api
docker build -f Dockerfile -t toolboxtestapi .
docker run  --name toolboxtestapi -p 3000:3000 toolboxtestapi
```

### STEP 2: RUN THE WEBAPP

```
cd webapp
docker build -f Dockerfile -t toolboxtestwebapp .
docker run  --name toolboxtestwebapp -p 3000:3000 toolboxtestwebapp
```
