FROM node:18-alpine as builder

WORKDIR /app

COPY package.json package-lock.json svelte.config.js \
tsconfig.json vite.config.ts tailwind.config.cjs postcss.config.cjs ./

RUN ["npm", "install"]

COPY ./src ./src
COPY ./static ./static

RUN ["npm", "run", "build"]

CMD ["node", "build"]
