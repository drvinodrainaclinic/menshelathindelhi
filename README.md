This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Production Setup: Appointments DB + Email

This project includes a production-ready appointments API at `app/api/appointments/route.ts`.

- **Database**: Neon (Postgres) via `@neondatabase/serverless`. Client in `lib/db.ts`.
- **Email**: Nodemailer SMTP via `lib/email.ts`.
- **Fallback**: If env vars are missing, the API writes/reads `data/appointments.json` (dev/demo only).

### 1) Install dependencies

```bash
npm install
```

### 2) Create Environment Variables

Set these in your local `.env` and in Vercel Project Settings → Environment Variables.

Required for DB (Neon):

```
DATABASE_URL=postgres://<user>:<password>@<host>/<database>?sslmode=require
```

Required for Email (SMTP):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_gmail_username_or_app_address
SMTP_PASS=your_app_password

# From/To addresses
EMAIL_FROM="Clinic <your_gmail_username_or_app_address>"
EMAIL_TO=menshealthindelhi@gmail.com
```

Notes:

- For Gmail, create an App Password and use it for `SMTP_PASS` (2FA required). Avoid plain account passwords.
- `EMAIL_TO` defaults to `menshealthindelhi@gmail.com` if not set.

### 3) Provision Neon (Postgres)

1. Create a Neon project and database.
2. Copy the connection string and set `DATABASE_URL`.
3. No manual migrations needed; the API creates the `appointments` table on first use.

Table schema created automatically:

```sql
CREATE TABLE IF NOT EXISTS appointments (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### 4) Deploy on Vercel

1. Push changes to GitHub.
2. In Vercel Project Settings, add the env vars above.
3. Redeploy. API will use Neon and send email; without env vars it falls back to file storage (not recommended for production).


10m ago
1m ago

Integrate email/DB for production. appointment use vercel neon database and email menshealthindelhi@gmail.com

I'll scan the project to find the appointments feature, current database setup (if any), and email sending code, so I can hook them up to Neon (Postgres) on Vercel and configure production email. I'll search for existing schema, API routes, env usage, and email utilities.

Analyzed
c:\Users\drvin\Documents\GitHub\menshelathindelhi
Searched
sendEmail|nodemailer|resend|smtp|email in c:\Users\drvin\Documents\GitHub\menshelathindelhi (0)
I'll open the appointments API route and related form/components to see how data is currently handled, so I can wire it to Neon Postgres and production email.

1
Install and configure Neon Postgres driver and Nodemailer dependencies

Create DB client `lib/db.ts` using Neon connection string

Create email utility `lib/email.ts` to send notifications to menshealthindelhi@gmail.com`

Refactor `app/api/appointments/route.ts` to insert into Postgres and send email; keep file write as fallback in dev

Add `.env.example` and update README with env vars and Vercel/Neon setup steps

I'll add the required dependencies to 
package.json
 for Neon Postgres and Nodemailer, create a Neon DB client and email utility, refactor the appointments API to write to Postgres and send emails, and add an .env.example with needed variables. After that, you'll just need to install packages and set env vars on Vercel and Neon.

package.json
+3
-1
I'll create a Neon DB client and an email utility, then refactor the appointments API route to insert into Neon and send an email, while keeping the file-based fallback for development. I'll also add an .env.example to document required environment variables.

db.ts
new
+23


I'll add an email utility using Nodemailer, refactor the appointments API to use Neon Postgres with a file fallback, and add an .env.example documenting required variables for production.

email.ts
new
+57


I'll refactor 
app/api/appointments/route.ts
 to insert appointments into Neon Postgres and send an email using Nodemailer, while keeping the existing file-based storage as a fallback in development when env vars are missing.

route.ts
+66
-16
I'll add an .env.example with the required variables and update 
README.md
 with Neon and email setup steps. Then I'll propose installing the new dependencies.

I'll update the GET handler in 
app/api/appointments/route.ts
 to read from Neon Postgres when configured, with the existing file read as a fallback. This keeps list retrieval consistent with the new POST behavior.

route.ts
+32
-4


I'll fix a TypeScript lint error in 
app/api/appointments/route.ts
 by annotating the row type in the map. Then I'll add an .env.example documenting required environment variables, and update 
README.md
 with Neon and email configuration steps.

route.ts
+11
-1
Access to file
.env.example
is prohibited by
.gitignore
README.md
+71
1
Install and configure Neon Postgres driver and Nodemailer dependencies

Create DB client `lib/db.ts` using Neon connection string

Create email utility `lib/email.ts` to send notifications to menshealthindelhi@gmail.com`

Refactor `app/api/appointments/route.ts` to insert into Postgres and send email; keep file write as fallback in dev

Add `.env.example` and update README with env vars and Vercel/Neon setup steps

What I changed
Database integration: Added Neon Postgres via @neondatabase/serverless.
New: 
lib/db.ts
 creates a Neon SQL client and ensures appointments table exists.
Email integration: Added SMTP email via Nodemailer.
New: 
lib/email.ts
 with 
sendAppointmentEmail()
 and 
hasEmailConfig()
.
API refactor: 
app/api/appointments/route.ts
POST now writes to Neon if DATABASE_URL is set, otherwise falls back to data/appointments.json.
GET now reads from Neon if configured, otherwise from the file.
Best-effort email send to menshealthindelhi@gmail.com (configurable via EMAIL_TO), errors don’t block the response.
Docs: Updated 
README.md
 with Neon + SMTP setup, including all env vars and Vercel instructions.
Deps: Added @neondatabase/serverless and nodemailer to 
package.json
.
Files updated/added:

app/api/appointments/route.ts
lib/db.ts
lib/email.ts
package.json
README.md
What you need to do
Install dependencies (resolves the current TypeScript “Cannot find module” lints):
@neondatabase/serverless, nodemailer will be installed from 
package.json
.
Set environment variables (local .env and Vercel Project Settings → Environment Variables):
Database:
DATABASE_URL=postgres://<user>:<password>@<host>/<db>?sslmode=require (from Neon)
Email (Gmail SMTP example):
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_gmail_address
SMTP_PASS=your_gmail_app_password (use an App Password; don’t use your account password)
EMAIL_FROM="Clinic <your_gmail_address>"
EMAIL_TO=menshealthindelhi@gmail.com (default if omitted)
Provision Neon:
Create a Neon project and database.
Copy the connection string into DATABASE_URL.
No manual migration needed; appointments table is created automatically on first request.
Optional command to run
I can run the install for you. Approve the command below to install new dependencies.

Install packages
Command: npm install
Notes
AppointmentForm.tsx
 continues posting to /api/appointments. With env vars set on Vercel, production writes to Neon and sends email to menshealthindelhi@gmail.com.
If env vars are missing (e.g., in dev), the API safely falls back to data/appointments.json.
The TypeScript lint warnings about missing modules will disappear after you run npm install.
Status
DB + Email integration implemented.
Docs updated.
Pending: install packages and set env vars on Vercel and Neon.
Feedback submitted


Email (Gmail SMTP example):

how to create

Set up Gmail SMTP (App Password)
Follow these steps to create credentials you can use with the existing 
lib/email.ts
:

Enable 2‑Step Verification
Go to https://myaccount.google.com/security
Under “Signing in to Google”, turn on 2‑Step Verification.
Create an App Password
In the same Security page, click “App passwords”.
Choose app: “Mail”. Device: “Other (Custom name)” → e.g. “Vercel”.
Click Generate. Copy the 16‑character password (no spaces).
Use these values in your env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465 (SSL) or 587 (STARTTLS). Our code treats 465 as secure by default.
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=<the 16‑char app password>
EMAIL_FROM="Clinic <your_gmail_address@gmail.com>"
EMAIL_TO=menshealthindelhi@gmail.com (or leave unset; our API defaults to this)
Add these to:

Local .env for development.
Vercel → Project Settings → Environment Variables for production.
Important notes
From address must match: Set EMAIL_FROM to the same Gmail you use in SMTP_USER to avoid DMARC/SPF issues.
No “Less secure apps”: Google removed it; App Password is required.
Google Workspace: If using a custom domain on Workspace and you want to send as you@yourdomain.com, use that Workspace mailbox for SMTP_USER and EMAIL_FROM. Ensure your domain’s SPF/DKIM/DMARC are set for better deliverability.
Rate limits: Gmail has sending limits; for higher volume consider a provider like Resend, SendGrid, or SES later.

