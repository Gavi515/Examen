use('examen1_mongodb');


db.products.find({fecha_vencimiento: {$lt: new Date (2024, 10, 30)}})