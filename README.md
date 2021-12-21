# Strapi CMS for onboarding-portal-webapp application
The backend CMS for the onboarding-portal-webapp. Serves content in the form of pages and manages roles and permissions.

## Environment Variables
The following is a list of environment variables used by the service:

Name                    | Description                                        | Example Value
----------------------- | -------------------------------------------------- | -----------------------------------------------
STRAPI_URL              | The URL of the backend STRAPI api                  | http://localhost:1337
DATABASE_HOST           | The host of the database                           | localhost


## Running locally
The webapp will run locally on localhost:1337, so ensure this port is free.

In the root directory of the project, run the following command to start the webapp:
```
npm run develop
```
Navigate to http://localhost:1337/admin in your browser to create/login to the administrator panel.

## Building with Docker
To build a docker image for this app run the following command
```
docker build -t vigilant-dollop .
```
To start a docker container with the image run the following
```
docker run -p 127.0.0.1:1337:1337 vigilant-dollop
```

The Webapp will then be accessible on `127.0.0.1:1337`
