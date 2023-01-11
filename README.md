# mean_2023

[![](https://img.shields.io/badge/Angular-v15-1976d2.svg)](https://angular.io/)
[![](https://img.shields.io/badge/MongoDb-4.2-023430.svg)](https://www.mongodb.com/)
[![](https://img.shields.io/badge/Node-18.13.0-333.svg)](https://nodejs.org/)

## Install

```BASH
nvm install 18.13.0
nvm use 18.13.0
```
```BASH
npm install -g @angular/cli
```

## SSL

```BASH
openssl genrsa -out key.pem 2048
openssl req -new -sha256 -key key.pem -out csr.csr
openssl req -x509 -sha256 -days 365 -key key.pem -in csr.csr -out certificate.pem
```
