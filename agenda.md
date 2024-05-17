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
- [ ] tags (`yarn rw g scaffold tags`)
  - [ ] create
  - [ ] edit
  - [ ] delete
  - [ ] list user tags
  - [ ] autocomplete suggestions
- [ ] users
  - [ ] whatever confirmation ui required by auth
    - [ ] sign up
    - [ ] log in
    - [ ] log out

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
