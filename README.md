# Nexus / Next.js / Prisma / GraphQL Example

I was looking for a good example of a fullstack app using Nexus, Next.js, Prisma, and GraphQL. I couldn't an up to date one, so I built this, heavily inspired by [Nexus' NextJS adoption guide](https://nexusjs.org/docs/adoption-guides/nextjs-users).

⚠️ I couldn't get it to work with NextJS's App Router, it only works with the page router for now.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v18+)
- [pnpm](https://pnpm.io/installation) (v8+) (optional, you can change the package manager if you prefer)
- [Docker](https://docs.docker.com/get-docker/) (v20+) (optional, you can use a local Postgres instance if you prefer)

### Installation

1. Install dependencies

```bash
pnpm install
```

2. Start the database

```bash
docker-compose up -d
```

3. Run the migrations

```bash
pnpm prisma migrate
```

4. Start the dev server

```bash
pnpm dev
```

5. Open [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql) with your browser and start querying.

6. You should be able to run this query

```graphql
query ExampleQuery {
  frameworks {
    name
  }
  Task {
    title
  }
}
```
