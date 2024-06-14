# agenda

- [x] db
  - [x] docker-compose
  - [x] prisma schema
- [x] auth
  - [x] research options
  - [x] pick one
- [x] tabs (`yarn rw g scaffold tabs`)
  - [x] create
  - [x] edit
    - [x] separate read-only "detail view"?
  - [x] delete
  - [x] list user tabs
- [x] tags (`yarn rw g scaffold tags`)
  - [x] create
  - [x] edit
  - [x] delete
  - [x] list user tags
  - [x] autocomplete suggestions
  - [x] tagged tabs
    - [x] gql endpoint
- [x] users
  - [x] whatever confirmation ui required by auth
    - [x] sign up
    - [x] log in
    - [x] log out

# data model

- User
  - id (uuid, unique)
  - email (text, unique)
  - password (text, hashed)
- Tab
  - id (uuid, unique)
  - user_id (uuid, references `user.id`)
  - url (text)
  - notes (text)
  - `has many` Tag
- Tag
  - id (uuid, unique)
  - user_id (uuid, referencess `user.id`)
  - tag (text)
