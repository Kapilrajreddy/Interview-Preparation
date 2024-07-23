import { useState } from "react";

const ContactForm = ()=>{

    const [formData,setFormData] = useState(
        {
            name:"",
            email:"",
            password:"",
            profile:null
        }
    )


    const handleChange=(e)=>{
        const {name,value} = e.target 
        setFormData({...formData,[name]:value})
    }

    const handleFileChange=(e)=>{
        console.log(e.target)
         const file = e.target.files[0]
         setFormData({...formData,profile:file})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()

        console.log(formData)

        for (let i in formData){
            console.log(i)
            if(formData[i]==="" || formData[i]===null){
                alert(`${i} is required`)
            }
        }

        const formDataToSend = new FormData()

        formDataToSend.append("name",formData.name)
        formDataToSend.append("email",formData.email)
        formDataToSend.append("password", formData.password);
        if(formData.profile){
            formDataToSend.append("profile", formData.password);
        }


        // Object.entries(formData).forEach(([key,value])=>{
        //     if(key==="profile"){
        //         formDataToSend.append(key,value)
        //     }else{
        //         formDataToSend.append(key, value||"");
        //     }
        // })



        console.log(formDataToSend, "formDataToSend");
    
        try{    
        const response = await fetch("/post",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Autorization":`Bearer ${""}`
             },
            body:formDataToSend
            })
        
         if (!response.ok) {
            throw new Error("Faliled to submit")
         }
        }catch(error){
        console.log(error)
    }
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Profile pic</label>
            <input
              type="file"
              
              name="profile"
              
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default ContactForm