//! Migrations and Models

// * npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,foto:string,role:string
// * npx sequelize-cli model:generate --name Post --attributes author:integer,title:string,body:text,anime:integer
// * npx sequelize-cli model:generate --name Discussion --attributes user_id:integer,anime_id:integer,body:text
// * npx sequelize-cli model:generate --name Favorites --attributes user_id:integer,anime_id:integer
// * npx sequelize-cli model:generate --name Anime --attributes external_key:integer
