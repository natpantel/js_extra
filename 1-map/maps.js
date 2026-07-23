const arr = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
]

const ids = [... new Set(arr.map((o) => o.id))]

const result = ids.map((id) => arr.find((o) => o.id == id))
