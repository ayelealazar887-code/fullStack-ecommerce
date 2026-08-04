import { configDotenv } from "dotenv";

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body);

        if(!email || !password) {
            return res.status(400).json({error: "email and password are required"})
        }
    } catch (error) {
        console.log("Login error:", error);
        return res.status(500).json({error: "Login failed"});
    }
}