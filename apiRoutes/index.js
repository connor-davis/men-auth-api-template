const { Router } = require("express");
const router = Router();
const passport = require("passport");

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @openapi
 * tags:
 *   - name: Authentication
 *     description: Api authentication routes.
 *   - name: Users
 *     description: Api users routes.
 */
router.use("/authentication", require("./authentication"));
router.use("/users", passport.authenticate("jwt", {session: false}), require("./users"));

module.exports = router;