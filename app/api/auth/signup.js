 import { connectToMongoDB } from "@/lib/mongodb"
import User from "../../modules/user"
import { hash } from "bcryptjs"
import mongoose from "mongoose"


const handler = async (req, res) => {
    connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST") {
        if (!req.body) return res.status(400).json({error: "Data is missing"})

        const { fullName, email, password, phoneNumber} = req.body

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(409).json({error: "User Already exisits"})
        }
        else{
            if(password.length < 6)
                return res.status(409).json({error: "Password should be 6 characters long"})

                const hashedPassword = await hash(password, 12)

                User.create(
                    {
                      fullName,
                      email,
                      password: hashedPassword,
                      phoneNumber,
                    },
                    (error, data) => {
                      if (error && error instanceof mongoose.Error.ValidationError) {
                        for (let field in error.errors) {
                          const msg = error.errors[field].message;
                          return res.status(409).json({ error: msg });
                        }
                      }
                  
                      const user = {
                        email,
                        fullName,
                        phoneNumber,
                        _id: data._id, // Add the _id from the created user data
                      };
                  
                      return res.status(201).json({
                        success: true,
                        user,
                      });
                    }
                  );
                  
            
        }
            
        
    }
    else{
        res.status(405).json({error: "Method Not Allowed"})
    }
}

export default handler