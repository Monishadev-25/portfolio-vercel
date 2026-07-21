
## Running it

```bash
npm install
npm run dev
```

```bash
npm install             # from the project root — installs BOTH the frontend
                         # and server/ deps in one shot (npm workspaces)
cd server
cp .env.example .env    # then edit .env with your SMTP credentials + admin email
cd ..
npm run server          # starts the API on http://localhost:5000

npm run dev            #In another terminal
```


If you use Gmail as the SMTP host, you'll need a Google Account
["App Password"](https://myaccount.google.com/apppasswords) rather than your
normal login password (2-Step Verification must be enabled first).
