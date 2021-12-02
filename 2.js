const fs = require("fs")

const data = fs.readFileSync("2_input.txt", "utf-8")
const movements = data.trim().split(/\r\n/)

let x = 0
let y = 0
let aim = 0

// A
for (let i = 0; i < movements.length; i++) {
  const movement = movements[i].split(" ")
  const direction = movement[0]
  const steps = parseInt(movement[1])

  switch(direction) {
    case "forward":
      x += steps
      break
    case "up":
      y -= steps
      break
    case "down":
      y += steps
      break
  }
}

// B
for (let i = 0; i < movements.length; i++) {
  const movement = movements[i].split(" ")
  const direction = movement[0]
  const units = parseInt(movement[1])

  switch(direction) {
    case "forward":
      x += units
      y = y + aim * units
      break
    case "up":
      aim -= units
      break
    case "down":
      aim += units
      break
  }
}

console.log(x, y, x * y)