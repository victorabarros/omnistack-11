FROM node:12.16

COPY ./entry.sh .
COPY ./src/* ./src/
WORKDIR ./src

RUN npm init -y && \
    npm install express && \
    npm install knex && \
    npm install sqlite3 && \
    npx knex init

# ENTRYPOINT ./entry.sh
# CMD ['nodejs', './index.js']
