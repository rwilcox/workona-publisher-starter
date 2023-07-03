This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Using this to display your own Workona export

After you fork this project, you can add your own exported [Workona](https://workona.com/) workspaces to it
  1. Export your Workona data
  2. Edit that JSON to keep only the workspace you want to display, putting that in the `_workspaces` directory
  3. Create a page in `src/pages/`. The only line you should need to change is the first, to point to your file in `_workspaces`
  4. Link to your page from `src/app/page.js`, aka the root of the project. The URL is the name of the file in `src/pages/`

# Some conventions in this project

  * functions that could, in theory, be split out into their own components (but aren't, for now) are prefixed with `display`
  * ... more notes doubtless to be added later...
