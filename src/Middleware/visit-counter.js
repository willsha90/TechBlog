module.exports = (req, res, next) =>{
    if(req.session.visitCount) {
      req.session.visitCount++;
    } else {
      req.session.visitCount = 1;
    }

    next();
}