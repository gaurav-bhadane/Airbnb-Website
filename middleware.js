module.exports.isLoggedIn = (req,res,next)=>{
    console.log(req.user)
    if (!req.isAuthenticated()){
        req.flash("error","You must be logged in to Create Listing")
        return res.redirect('/login')
    }
    next()
}