import express from "express"
import dotenv from "dotenv"

dotenv.config();

const PORT= dotenv.PORT || 3000;

const app= express();

app.use(express.urlencoded());
app.use(express.json());

app.listen(PORT, (err)=>{
    if(err){
        console.log("Error initiating the server");
    }
    console.log(`Server running on http://localhost:${PORT}`);
})