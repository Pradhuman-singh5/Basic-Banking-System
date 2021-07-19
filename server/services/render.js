const axios = require('axios')

exports.homeRoutes=(req,res)=>{
    res.render('home',{
        title:'Home'
    });
}

exports.transactionRoute=(req,res)=>{
    axios.get('https://basic-banking-s.herokuapp.com/api/transactions')
    .then(function(response){
        res.render('transaction',{
            title:'Transaction',
            transaction:response.data
        });
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.customerRoute=(req,res)=>{
    res.render('customer',{
        title:'Customer'
    });
}

exports.sendRoute=(req,res)=>{
    res.render('send',{
        title:'Send',
    });
}

exports.successRoute=(req,res)=>{
    res.render('success',{
        title:'Successful',
    });
}