# www.tuesdaystunes.tv

[![Netlify Status](https://api.netlify.com/api/v1/badges/03f43ad6-9b13-4a85-b682-d3a95a3e359d/deploy-status)](https://app.netlify.com/sites/laughing-kare-be3077/deploys)

## Overview

This is the frontend repo for the [Tuesday's Tunes website](https://www.tuesdaystunes.tv) built with [Greenwood](https://www.greenwoodjs.io/).🏃‍♂️

## Setup

After cloning the repo, do the following to get up and running
1. Install [NodeJS](https://nodejs.org/en/) (LTS) or run [`nvm use`](https://github.com/nvm-sh/nvm)
1. Install [Yarn](https://yarnpkg.com/en/) (>= 1.x)
1. Run `yarn install`

## Development

See _package.json_ for all options:
- `yarn dev` - Start a local development server with file watching, live reload, etc
- `yarn serve` - Build the site for production and start a server locally (useful for a local demo)
- `yarn test:tdd` - Run tests in watch mode
- `yarn story:dev` - Run Storybook for development

## Release Management

The project is hosted by [Netlify](https://www.netlify.com/) and is setup to deploy continuously on every merge to the mainline branch in GitHub.  [GitHub Actions](https://github.com/features/actions) are used for continuous integration on PRs and Netlify will deploy preview builds for all PRs.