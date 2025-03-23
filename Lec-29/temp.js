db.find( { $and: [{ age: {$gt: 20} } , { age: { $lt:60 } }] })


db.movies.find( { $and: [{ rating: {$gte: 8} } , { rating: { $lte:9 } }] })

