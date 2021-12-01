const fs = require("fs")

const data = fs.readFileSync("1_input.txt", "utf-8")
const scans = data.trim().split(/\r\n/).map(e => parseInt(e))

let increases = 0

// A
for (let i = 0; i < scans.length; i++) {
  if (scans[i + 1] > scans[i]) increases++
}

// B
for (let i = 0; i < scans.length; i++) {
  const a = scans[i] + scans[i + 1] + scans[i + 2]
  const b = scans[i + 1] + scans[i + 2] + scans[i + 3]
  if (b > a) increases++
}

console.log(increases)