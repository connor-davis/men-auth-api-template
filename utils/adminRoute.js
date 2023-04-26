const adminRoute = (request, response, next) => {
    if (request.user.businessType === "admin") return next();
    else return response.status(401).send("Unauthorized");
};

module.exports = adminRoute;