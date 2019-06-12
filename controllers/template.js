const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {  if(!req.session.deck){
      req.session.deck = [];
    }
    knex("cards").then((cardresult)=>{
    res.render("index",{cards:cardresult,deck:req.session.deck});
  })
  },
  createCard: (req,res)=>{
    knex("cards").insert(req.body).then(()=>{
      res.redirect('/');
    })},
    add: function(req,res){
      if(!req.session.deck){
        req.session.deck = [];
      }
      knex('cards').where('id',req.params.id)
      .then((result)=>{req.session.deck.push(result[0]);
          res.redirect('/');
      });
    }
  }
