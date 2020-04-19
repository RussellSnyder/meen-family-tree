# MEEN Family Tree [WIP]
## Mongo, Express, Ember & Node - Fullstack Javascript Example

### To Run Development

1. Clone with repo
```
git clone git@github.com:RussellSnyder/meen-family-tree.git
```

All commands from this point on are meant to be run from the root directory


2. Install node modules
client
```
cd client
npm i
```
server
```
cd server
npm i
```
3. Make sure you have mongodb installed and is running https://docs.mongodb.com/manual/administration/install-community/

4. Seed the database so you have some results to play with
```
npm run seed
```

This will generate some generations of family member to work with

5. Run the app
```
npm run start:dev
```

The backend results can be seen at http://localhost:3000/family-members
The frontend can be seen at http://localhost:4200/family-members