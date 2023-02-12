# Astrotus

Astrotus is a pre-configured setup for Directus and Astro that makes it easy to get started with building your website. With Astrotus, you'll have a complete development environment that you can run locally using Docker. This makes it easy to test and develop your website before deploying it to a production environment.

When you're ready to deploy the website on your own server, Astrotus comes with a production environment that requires the use of Traefik as a reverse proxy. This setup provides a secure and scalable production environment for your website.

## Getting started

To get started with Astrotus, you'll need to have Docker and NPM || Yarn || PNPM installed on your machine.

1. Clone this repository: `git clone https://github.com/mooxl/astrotus.git`
2. Change into the repository directory: `cd astrotus`
3. Start the containers: `yarn dev`

This will start up the Directus, Database and Astro containers and make them available on your local machine. The site will be served at http://localhost:3000 and the Directus will be available at http://localhost:8055.

## Development

The `docker-compose.yml` file includes both the Directus and Astro containers and sets up everything to run the containers. The containers use the environment variables declared in the `.env.development` file and mounted volumes to store data persistently even after the containers are stopped and started.

## Production

When you're ready to deploy your website to a production environment, you'll should copy the `.env.development` and rename it into `.env.production`. The you modify the file to suit your needs. This file contains the configuration for the Traefik reverse proxy and Directus and Astro.

Once you've modified the `.env.production`, you can run the following command to deploy your website to a production environment: `yarn prod`

