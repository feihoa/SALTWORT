# SALTWORT - Angular Native Federation

SALTWORT is a monorepository using **native federation** for Angular applications.  
It contains multiple apps organized using **npm workspaces**.

---

## 📁 Project Structure
```
SALTWORT/
├── apps/
│ ├── bridge-pattern/
│ ├── shell/
│ └── ...
├── .gitignore
├── README.md
└── package.json
```

- **`apps/`**: Contains all applications.
  - **`bridge-pattern/`**: Bridge Pattern application.
  - **`shell/`**: Shell application.
  - ...

---

## 🚀 Getting Started

Clone the repository and navigate into it:

```bash
git clone https://github.com/feihoa/SALTWORT.git
cd SALTWORT
```

⚙️ Available Scripts

Script	Description:
```
serve-shell	Starts the shell application on port 4200
serve-bridge	Starts the bridge-pattern application on port 4201
all	Starts both shell and bridge-pattern simultaneously using concurrently
```
Examples:
```
npm run serve-shell
```
```
npm run serve-bridge
```
```
npm run all
```


