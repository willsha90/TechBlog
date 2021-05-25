const visitCounter = require('../Utils/visit-counter');
const {User, Post} = require('../Models');

module.exports = {
  showHomePage: (req, res, next) => {
    visitCounter(req);
    const isFirstVisit = req.session.visitCount == 1;
    if(isFirstVisit) {
      console.log('HomeController.showHomePage: first visit');

    } else {
      console.log('HomeController.showHomePage: visit count = ', req.session.visitCount);
    }
    res.render('index');
  }
};
