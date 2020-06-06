# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds
6. Exceptions & Sentry
7. WebSocket
8. Redis
9. Hooks
10. Validators
11. Internationalization
12. Push Notifications

## Setup

Use the adonis command to install the blueprint

```bash
adonis new name --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
adonis kue:listen
```

### Start

Run the following command to run api.

```js
adonis serve --dev
adonis kue:listen
```
