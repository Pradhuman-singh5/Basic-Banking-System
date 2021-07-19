var Transactiondb = require('../models/model')
 
// Creat and save new transactiion
exports.create=(req,res)=>{
    //validate the request
    if(!req.body){
        res.status(400).send({message:'Content can not be empty'});
        return;
    }

    //new transaction
    const transaction = new Transactiondb({
        from:req.body.from,
        to:req.body.to,
        Amount:req.body.Amount
    })

    //save transaction in DB
    transaction.save(transaction).then(data=>{
       // res.send(data);
       res.redirect('/successfull')
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Something error occurred while creating a create operation"
        })
    })
}

// Retrive and return all the transaction
exports.find=(req,res)=>{
    Transactiondb.find().then(transaction=>{
        res.send(transaction)
    })
    .catch(err=>{
        res.status(500).send({ message:err.message ||"Error occur while retriving transaction data"})
    })
}