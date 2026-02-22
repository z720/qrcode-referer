FROM node:25 AS build
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:25-slim
ENV NODE_ENV=production
WORKDIR /app
RUN mkdir -p ./logs
COPY lib/ /app/lib/
COPY package*.json /app/
COPY ./*.js /app/
COPY --from=build /app/static /app/static
RUN npm ci --omit-dev
EXPOSE 8080
ENV PORT=8080

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "node", "healthcheck.js" ]
ENTRYPOINT [ "node", "server.js" ]
