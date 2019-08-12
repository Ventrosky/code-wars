export default (req, res, next) => {
    console.log(
        '=>',
        req.method,
        req.originalUrl,
        'isAdmin:', 
        req.isAdmin,
        'isAuthenticated:',
        req.isAuthenticated
    );
    next();
}

