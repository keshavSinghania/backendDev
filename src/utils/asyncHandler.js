const asynchHandler= (requireHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requireHandler(req,res,next)).
        catch((err)=> next(err))
    }
}
export {asynchHandler}