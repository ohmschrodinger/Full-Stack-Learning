db.inventory.find( {} )
// returns all the documents / fetch all

db.inventory.find({qty: 25})
// returns all the documents whose  qty is 25 / fetch all matching documents

db.inventory.find( { status: "D" } )
db.inventory.find( { status: { $in: [ "A", "D" ] } } )
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// or operator

db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

// update one, update many, replace

// check out piplelining from mongo db  documentation
// https://docs.mongodb.com/manual/core/pipeline-operations/


