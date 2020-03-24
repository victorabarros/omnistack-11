FROM node:12.16

COPY ./src/* ./src/
WORKDIR ./src

RUN npm init -y && \
    # npm install knex && \
    # npm install sqlite3 && \
    # npx knex init && \
    npm install express

CMD ['nodejs', './index.js']
