# 🚀 Advanced Web Development — Practical Exercises

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v14+-43853d?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-13aa52?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![AngularJS](https://img.shields.io/badge/AngularJS-1.x-dd1b16?style=for-the-badge&logo=angularjs)](https://angularjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**A comprehensive lab manual for full-stack web development fundamentals**

*Master AngularJS, Node.js, Express & MongoDB through hands-on practicals*

</div>

---

## 📚 What This Repository Contains

Welcome to the Advanced Web Development (MCA) course practical exercises! This is your **hands-on lab playground** featuring 10+ focused, bite-sized practicals designed to build real web development skills:

### 🎯 Core Technologies
- **Frontend:** AngularJS 1.x (controllers, services, custom filters, two-way data binding)
- **Backend:** Node.js (HTTP module, Express framework)
- **Database:** MongoDB + Mongoose (embedded documents, references, CRUD operations)

---

## ✨ Repository Highlights

<table>
  <tr>
    <td><strong>🔧 Hands-On Labs</strong></td>
    <td>10+ practical exercises with complete code examples</td>
  </tr>
  <tr>
    <td><strong>📖 Lab Sheets</strong></td>
    <td>Detailed assignment briefs included as PDFs</td>
  </tr>
  <tr>
    <td><strong>📝 Complete Reports</strong></td>
    <td>Full code & output documentation</td>
  </tr>
  <tr>
    <td><strong>🏃 Quick Start</strong></td>
    <td>One-command setup with npm & Express server</td>
  </tr>
</table>

---

## 📁 Repository Structure

```
📦 Advanced-Web-Development-practical-s
├── 📄 README.md                          # You are here! 🎉
├── 📋 AWD practical 1.pdf               # Assignment brief & lab sheet
├── 📊 Practical_Code_and_Output_Report.pdf
├── 
├── 🎨 FRONTEND PRACTICALS (AngularJS)
├── ├── practical2 AWD.html              # Product Order Form (GST calculator)
├── ├── practical3 AWD.html              # Prime Number Filter demo
├── ├── practical4 AWD.html              # Custom Service: Square Calculator
├── ├── practical5 AWD.html              # Arithmetic Service
├── ├── practical9 AWD.html              # Student Records (CRUD interface)
├── ├── practical10 AWD.html             # Bonus front-end practical
├── └── practical10 AWD1.js              # Bonus JavaScript utilities
├── 
├── 🖥️  BACKEND PRACTICALS (Node.js)
├── ├── practical6 AWD.js                # HTTP Server (routing demo)
├── ├── practical7 AWD.js                # Mongoose: Embedded & Referenced models
├── └── practical8 AWD.js                # Mongoose: Create & Read operations
├── 
├── ⚙️  SERVER & CONFIG
├── ├── server.js                        # Express helper server (NEW)
├── ├── package.json                     # Dependencies & scripts (NEW)
├── └── .gitignore                       # Git configuration (NEW)
└── 📄 LICENSE                           # License
```

---

## 🚀 Quick Start (30 seconds)

### Prerequisites
- ✅ Node.js v14+ ([Download](https://nodejs.org/))
- ✅ Git
- ✅ MongoDB (optional, only for practical7/8)

### Setup & Run

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Creator-Naren/Advanced-Web-Development-practical-s.git
cd Advanced-Web-Development-practical-s

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the server
npm start

# 4️⃣ Open your browser 🌐
# Frontend files → http://localhost:4000
# Example → http://localhost:4000/practical9%20AWD.html
# API endpoint → http://localhost:4000/api/students
```

---

## 🎓 Practical Exercises Breakdown

| # | Name | Tech Stack | What You'll Learn |
|---|------|-----------|-------------------|
| **2** | Product Order Form | AngularJS | `ng-repeat`, `ng-model`, computed properties, real-time calculations |
| **3** | Prime Number Filter | AngularJS | Custom filters, validation logic |
| **4** | Square Service | AngularJS | Service injection, single-responsibility principle |
| **5** | Arithmetic Service | AngularJS | Shared utilities via services |
| **6** | HTTP Server | Node.js | Routing, status codes, request handling |
| **7** | Mongoose Models | Node.js + MongoDB | Embedded schemas, references, model relationships |
| **8** | Create & Read | Node.js + MongoDB | CRUD operations with Mongoose |
| **9** | Student Records | AngularJS | Client-side CRUD, dynamic UI, state management |
| **10** | Bonus Challenge | AngularJS + JS | Advanced patterns & integrations |

---

## 🔧 What's New in This Update

✅ **Added README.md** — Polished, developer-friendly guide  
✅ **Added package.json** — npm scripts for quick startup  
✅ **Added server.js** — Lightweight Express server for static files + API endpoint  
✅ **Added .gitignore** — Keeps your repo clean (ignores node_modules)  
✅ **Non-invasive** — Original practicals remain completely unchanged

---

## 📖 Per-Practical Details

### Frontend (AngularJS)
- **Practical 2:** Real-world form with GST (18%) auto-calculation
- **Practical 3:** Learn custom filters with a prime number validator
- **Practical 4 & 5:** Master service architecture and dependency injection
- **Practical 9:** Build a dynamic student management UI (add/delete records)

### Backend (Node.js)
- **Practical 6:** Understand HTTP routing and response handling
- **Practical 7:** Design complex data models with Mongoose (teachers, courses, students)
- **Practical 8:** Master create, read, update operations with real data persistence

---

## 💡 Next Steps & Extensions

### Level Up Your Skills 🚀

<details>
<summary><b>Persist Data to Database</b></summary>

Convert practical9 to use a backend API:
```javascript
// Instead of storing in memory, POST to MongoDB
fetch('/api/students', { method: 'POST', body: JSON.stringify(student) })
```
</details>

<details>
<summary><b>Modernize the Stack</b></summary>

Try converting an AngularJS practical to React or Vue and compare:
- Component structure differences
- Reactivity patterns
- Complexity trade-offs
</details>

<details>
<summary><b>Scale the API</b></summary>

Replace the in-memory API in server.js with:
- Full MongoDB integration
- Authentication & authorization
- Advanced query operations
</details>

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Files won't load** | Use `npm start` instead of opening directly in browser (CORS issues) |
| **MongoDB connection fails** | Ensure MongoDB is running or update the connection URI in practical7/8 |
| **Port 4000 already in use** | Change port in server.js or kill the process using that port |
| **Module not found** | Run `npm install` to ensure all dependencies are installed |

---

## 🤝 Contributing

We welcome improvements! To contribute:

1. **Add a new practical:** Keep it single-purpose and focused
2. **Include documentation:** Add a header comment describing learning goals
3. **Test thoroughly:** Verify all code runs without errors
4. **Keep it clean:** Follow the existing code style

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Questions

Having trouble? Check:
- 📖 Lab sheets & reports (PDFs included)
- 💬 GitHub Issues
- 🔍 Inline code comments in each practical

---

<div align="center">

**Happy Learning! 🎓**

Made with ❤️ for the Advanced Web Development course

[⭐ Star this repo](#) · [🔗 Fork it](#) · [🐛 Report Issues](#)

</div>
