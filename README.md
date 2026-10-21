# Raksha Computers: frontend

React + TypeScript + Vite + Tailwind CSS + React Router + Motion + Lucide + React Hook Form + Zod. Frontend only: no backend, database or admin.

## Run
```
npm install
npm run dev        # development
npm run build      # typecheck + production build
npm run preview
```

## Important
- **Untested source.** This was written without network access, so `npm install`, the typecheck and the build have not been run. Fix any small typing issues they report.
- **Enquiry forms are simulated.** They validate on the client and show a demo confirmation. Nothing is sent or stored. Connect a backend in `src/lib/api.ts` (`submitEnquiry`).
- **All products are demo data** (`src/data/products.ts`). They are not the shop's stock. Prices are not shown.
- Services are unconfirmed and labelled as such (`src/data/services.ts`).
- Replace `YOUR-DOMAIN` in `public/robots.txt` and `public/sitemap.xml`. Set opening hours in `src/data/site.ts`.
- Single-page app: host with a rewrite to `index.html` (`public/_redirects` covers Netlify).
- Data access lives in `src/lib/api.ts`; swap its bodies for real API calls.
