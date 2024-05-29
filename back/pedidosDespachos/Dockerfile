FROM node:18-alpine as base

ENV DIR /app

WORKDIR $DIR

# ===== DEVELOPMENT =====
FROM base AS dev
RUN echo "Running the app in development mode"
ARG NPM_TOKEN

ENV NODE_ENV=development

COPY package*.json $DIR

# esto es para evitar problemas con el token de npm
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc && \
    npm ci && \
    rm -f .npmrc

COPY package*.json $DIR

RUN npm ci

COPY tsconfig*.json $DIR
COPY src $DIR/src

EXPOSE 3000
CMD ["npm", "run", "dev"]


# ===== BUILD =====
FROM base AS build
RUN echo "Building the app"
ARG NPM_TOKEN

RUN apk update && apk add --no-cache dumb-init # esto es para evitar problemas entre node y docker


COPY package*.json $DIR

# esto es para evitar problemas con el token de npm
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc && \
    npm ci && \
    rm -f .npmrc

COPY tsconfig*.json $DIR
COPY src $DIR/src

RUN npm run build && \
    npm prune --production

# ===== PRODUCTION =====
FROM base AS production
RUN echo "Running the app in production mode"
ENV USER node

COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=build $DIR/node_modules $DIR/node_modules
COPY --from=build $DIR/build $DIR/build

ENV NODE_ENV=production

EXPOSE 3000
USER $USER
CMD ["dumb-init","node", "build/app.js"]
