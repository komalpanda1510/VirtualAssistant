import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

//signup
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ message: "Email already exist!" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //user create
    const user = await User.create({
      name,
      password: hashedPassword,
      email,
    });

    //token generate
    const token = await genToken(user._id);
    //token are parse under cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 day
      sameSite: "strict",
      secure: false,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: `sign up error ${error}` });
  }
};

//login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email doesn't exist!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Password doesn't match!" });
    }

    //token generate
    const token = await genToken(user._id);
    //token are parse under cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 day
      sameSite: "strict",
      secure: false,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `login error ${error}` });
  }
};

//logout
export const logOut=async(req,res)=>{
    try {
        res.clearCookie("token")
            return res.status(200).json({message:"logout successfully!"});

    } catch (error) {
            return res.status(500).json({ message: `logout error ${error}` });

    }
}
