#Nox Builder
Nox Builder is a tool dedicated to create macros for Infinite Galaxy in easy and efficient way

## Requirements
To run builder on your machine you need to:
* install [NodeJS](https://nodejs.org/) latest version
* clone repository on your machine
* run in terminal command `npm install`

## How to use it?
Nox Builder will build for you macros based on stories defined in `./nox-builder/stories`<br/>

### Creating own story
1. Go to `./nox-builder/stories`
2. Add new yaml file
3. Follow pattern existing stories
4. For more information please execute in terminal `npm start -- -h`

### Generating macros
1. From terminal execute `npm start`
2. All macros will be saved under `./nox-builder/build/macros`