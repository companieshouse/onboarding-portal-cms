# onboarding-portal-cms
The onboarding portal is a service which provides new starters information about Companies House. The onboarding-portal-cms uses STRAPI, a content management system. STRAPI provides out-of-the-box support for managing content and users which can be retrieved by the onboarding-portal-webapp.

## Environment Variables

The following is a list of environment variables used by the service:

Name                    | Description                                        | Example Value
----------------------- | -------------------------------------------------- | -----------------------------------------------
STRAPI_URL              | The URL of the backend STRAPI api                  | http://localhost:1337
DATABASE_HOST           | The host of the database                           | localhost
DATABASE_PORT           | The port of the database                           | 27017
DATABASE_USERNAME       | The username of the database account               |
DATABASE_PASSWORD       | The password of the user account for the database  | 
AWS_ACCESS_KEY_ID       | Used for accessing the S3 Bucket on AWS            |
AWS_ACCESS_SECRET       | Used for accessing the S3 Bucket on AWS            |
AWS_BUCKET_NAME         | Used for storing assets (stylesheets / media)      | onboarding-portal-assets

## Install the dependencies

  `npm install`

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
docker build -t onboarding-portal-cms .
```
To start a docker container with the image run the following
```
docker run -p 127.0.0.1:1337:1337 onboarding-portal-cms
```

The Webapp will then be accessible on `127.0.0.1:1337`

## Initial STRAPI configuration

### To allow clients to use STRAPI

In the STRAPI administration console, go to "Settings@ -> "Users & Permissions Plugin" -> "Public Role" -> "Permissions": On pages, select "find" and "findone". Save. This allows clients to access the content in a 'read-only' format (i.e. for use by the webapp to display read-only content on a webpage).

### To add new users to STRAPI
In the STRAPI administration console, go to "Settings@ -> "Administration Panel" -> "Users" -> "Create New User" (found at the top right of the page). You can add a new user by entering their email and name details and assign them a role, e.g. super admin, editor, etc. This will provide you with a link which you can send directly to the person.

## Adding new content types to STRAPI
In the STRAPI administration console, go to "Content-Types Builder@ -> "Create New Collection Type". You can then provide an ID and name for the content type, e.g. 'Pages' or 'Paragraphs'. You are then able to provide 'fields' to the collection types, which can be used as different types of content. You can add images, rich text fields, relations to other collections, lists, JSON, etc. These fields will be the main content which will be retrieved by the webapp and used by the templating engine to display in the HTML. Once you have added a field, press 'Save' at the top right and this will save the new collection type.

Collections are saved to MongoDB and can be viewed via the Mongo shell or Robo3T.

## Adding new assets
Assets (such as stylesheets and media files) can be uploaded to an AWS S3 bucket via the STRAPI administrator console. You will need to ensure the AWS environment variables are set to access the S3 Bucket, otherwise the files will be stored locally. For live deployment, this is configured via the task definition for the ECS container.

