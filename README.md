# Advanced Web Development — Practical Exercises (AWD practicals)

Welcome to the lab-bench for the Advanced Web Development course (MCA). This repository contains concise, focused practicals that demonstrate classic full‑stack web development fundamentals: AngularJS front-end patterns, tiny Node.js servers, and MongoDB/Mongoose examples.

---

## What this is
A curated collection of hands-on practical exercises and reports used in classroom labs. Each practical is intentionally small and readable so you can open, tinker, and learn quickly.

## Highlights
- AngularJS 1.x examples (controllers, services, custom filters, two‑way binding)
- Node.js examples using the built-in http module and a small Express helper server
- MongoDB + Mongoose examples demonstrating embedded documents and references
- Lab sheets and a consolidated code & output report included as PDFs

## Repository structure
```
AWD practical 1.pdf                      # Assignment brief / Lab sheet (PDF)
Practical_Code_and_Output_Report.pdf     # Full code & output report (PDF)
LICENSE                                  # License file
practical2 AWD.html                      # AngularJS - Product Order Form (billing + gst)
practical3 AWD.html                      # AngularJS - Prime Filter demo
practical4 AWD.html                      # AngularJS - Service (square)
practical5 AWD.html                      # AngularJS - Arithmetic Service
practical6 AWD.js                        # Node.js - Minimal HTTP server (/, /about, /contact)
practical7 AWD.js                        # Node.js + Mongoose - Embedded & Referenced models demo
practical8 AWD.js                        # Node.js + Mongoose - Create & Read demo
practical9 AWD.html                      # AngularJS - Student Records (client-side CRUD)
practical10 AWD.html                     # Extra front-end practical
practical10 AWD1.js                      # Extra front-end JS
README.md                                # This file (new)
package.json                             # (new) convenience scripts + dependencies
server.js                                # (new) small Express server to serve static files + simple API
.gitignore                               # (new) to ignore node_modules
```

## How to run (short path)
Requirements: Node.js (v14+), Git. MongoDB is required only for Mongoose-based practicals (practical7/practical8).

1. Clone the repo:

```bash
git clone https://github.com/Creator-Naren/Advanced-Web-Development-practical-s.git
cd Advanced-Web-Development-practical-s
```

2. Install dependencies (this repository now includes a minimal package.json for convenience):

```bash
npm install
```

3. Start the helper server (serves static files and provides a tiny students API):

```bash
npm start
```

4. Open the browser:

- Static front-end files are served at: http://localhost:4000/
- Example: http://localhost:4000/practical9%20AWD.html
- Simple API endpoint: GET http://localhost:4000/api/students

Notes:
- The Express server is a convenience to serve static files and to provide a tiny, in-memory /api/students endpoint for rapid prototyping — it does not replace the original Node/Mongo demos.
- To run the Mongoose demos (practical7/practical8) you must have MongoDB running locally or update the connection URI inside those files.

## Improvements included in this commit
- Added README.md (this file) — a polished, developer-friendly guide.
- Added package.json with scripts: `start` to run server.js.
- Added server.js — a lightweight Express server that serves the repo directory and exposes a simple /api/students endpoint.
- Added .gitignore to exclude node_modules.

These changes are intentionally small and non-intrusive: they make it easier to preview the front-end practicals and prototype small API integrations without altering any original exercises.

## Per-practical quick notes
- practical2 AWD.html: Product Order Form — ng-repeat + ng-model with computed billAmount, gst (18%), total.
- practical3 AWD.html: Prime number filter — custom AngularJS filter `isPrime`.
- practical4 AWD.html: Square service — demonstrates service injection and single-responsibility logic.
- practical5 AWD.html: Arithmetic service — shared math functions via a service.
- practical6 AWD.js: Minimal Node.js http server — route handling and status codes.
- practical7 AWD.js: Mongoose demo — embedded `addressSchema` and referenced `Teacher`/`Course` models.
- practical8 AWD.js: Mongoose create & find example.
- practical9 AWD.html: Student Records (client-side) — add/remove UI prototype.

## How to extend
- Persist students from practical9 to an Express + MongoDB backend: implement a lightweight REST API (POST /api/students) and update the HTML to call the API.
- Modernize a front-end practical to React/Vue and compare complexity.
- Replace the simple in-memory API (server.js) with one that uses Mongoose and connects to MongoDB.

## Troubleshooting
- If static files behave oddly when opened directly in the file system, serve them using the included helper server (npm start) or a static server (python -m http.server).
- For Mongoose scripts: ensure MongoDB is running at the connection URI used in the practical files or update the URI.

## Contributing
Small improvements are welcome: add a new practical in its own set of files, keep each practical single-purpose, and include a short header comment describing learning goals.

## License
See LICENSE at repository root.

---

If you want, I can now:
- create a small Express-based RESTful API that persists to MongoDB using Mongoose (I can add an optional `USE_DB` flag and wiring),
- or convert a single AngularJS file to a modern framework as an example migration.

Choose one of those and I'll implement it next.