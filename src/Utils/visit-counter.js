module.exports = (req) =>{
    if(req.session.visitCount) {
      req.session.visitCount++;
    } else {
      req.session.visitCount = 1; 
    }
}