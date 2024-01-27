
//Get all Questions
export async function getQuestions(req, res) {
    res.json("questions api get request")
}

//Insert all Questions
export async function insertQuestions(req, res) {
    res.json("questions api post request")
}

//Delete all Questions
export async function dropQuestions(req, res) {
    res.json("questions api delete request")
}

//Get all Result
export async function getResult(req, res) {
    res.json("result api get request");
}

//Post all Result
export async function storeResult(req, res) {
    res.json("result api post request");
}

//Delete  all Result
export async function dropResult(req, res) {
    res.json("result api delete request")
}