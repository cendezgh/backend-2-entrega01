import { Router } from 'express';
import { passportCall } from "../passport/passportCall.js";
import { createResponse } from "../utils.js";

const router = Router();

router.get('/current', passportCall('current'), (req, res) => {
  if (!req.user) {
    return createResponse(req, res, 401, null, { msg: 'Unauthorized' });
  }
  return createResponse(req, res, 200, req.user);
});

export default router;
