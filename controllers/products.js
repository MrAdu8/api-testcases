const addUser = async (req, res) => {
    res.status(200).json({msg: "users all Data"});
    
};

const getAlltesting = async (req, res) => {
    res.status(200).json({msg: "users all Data testing"});
};

module.exports = {addUser, getAlltesting};