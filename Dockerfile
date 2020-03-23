FROM node
COPY . /src
WORKDIR ./src
RUN npm init -y &&\
    npm install -y express
