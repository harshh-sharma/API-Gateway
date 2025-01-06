function infoController(req,res){
    try {
       return res.send('Server is Live')
    } catch (error) {
        return res.status(500).json({
            success:false,
            mesage:error
        })
    }
}

module.exports = {
    infoController
}