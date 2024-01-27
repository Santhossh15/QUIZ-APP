import { Router } from "express";
const router = Router();

//import Controllers
import * as controller from "../controllers/controller.js"

// Questions Route Normal Way
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)

// Questions Route Enhanced Way
router.route('/questions')
    .get(controller.getQuestions) //GET Request
    .post(controller.insertQuestions) //POST Request
    .delete(controller.dropQuestions) //DELETE Request

// Result Route
router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult)

export default router;