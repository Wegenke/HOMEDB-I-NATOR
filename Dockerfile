# Runs Knex migrations + seeds in a throwaway container
FROM node:20-alpine

WORKDIR /app

# Install system deps (optional but handy for builds)
RUN apk add --no-cache bash

# Copy only package files first to leverage Docker layer caching
COPY package*.json ./

# Install deps (ensure knex is in dependencies or devDependencies)
RUN npm ci

# Copy the rest of the repo
COPY . .

# Bring in env from the parent (we’ll pass it at runtime)
# and add our tiny entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Default command: run migrations and seeds
CMD ["/entrypoint.sh"]
