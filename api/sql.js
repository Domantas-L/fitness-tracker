const initSqlJs = require("sql.js");
const fs = require("fs");
const path = require("path");



const dbPath = process.env.DATABASE_URL || "./data/app.db";

let db;

function saveDb() {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const data = db.export();
    fs.writeFileSync(dbPath, Buffer.from(data));
}

async function initDb() {
    const SQL = await initSqlJs();
    if (fs.existsSync(dbPath)) {
        db = new SQL.Database(fs.readFileSync(dbPath));
    } else {
        db = new SQL.Database();
    }

    db.run(`CREATE TABLE IF NOT EXISTS TodayTasks
        ( id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL,
         Start TEXT NOT NULL,
         End TEXT NOT NULL,
         DONE BOOLEAN DEFAULT 0,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP

        )`);
        saveDb();
        console.log("Table created successfully");
}

function getDb()
{
    return db;
}
module.exports = { initDb, getDb, saveDb };