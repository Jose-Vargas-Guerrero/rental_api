export const errorHandler = (err,req,res,next) => {
    console.error('error capturado: ',err.stack);
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        succes: false,
        message: err.message || 'error interno en el servidor'
    })
}

