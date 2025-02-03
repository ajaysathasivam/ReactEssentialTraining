import { useEffect, useState } from "react"
// import "../Component/style.scss"
const Form = () => {
    const initFormData = {
        firstName: '',
        lastName: '',
        url: '',
    }
    const initErrorData ={
            address: "",
            choiceAbout: "",
            contactNumber: "",
            email: "",
            firstName: "",
            gender: null,
            lastName: "",
            bestSubject: {
                english: false,
                math: false,
                tamil: false,
              },
            url: '',
            resume:null,
    }
    const [formData, setFormData] = useState(initFormData)
    const [formValue, setFormValue] = useState()
    const [error,setFormError]=useState(initErrorData)
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormValue((pre)=>({...pre, ...formData}))
        console.log(error,"err")
        console.log("submit")
    }
    const handleReset = (e) => {
        e.preventDefault()
        console.log(error)
        const reset = {
            address: "",
            choiceAbout: "",
            contactNumber: "",
            email: "",
            firstName: "",
            gender: null,
            lastName: "",
            bestSubject: {
                english: false,
                math: false,
                tamil: false,
              },
            url: '',
            resume:null,
        }
        setFormData(reset)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((pre) => ({
            ...pre,
            [name]: value
        })
        )
    }
    useEffect(()=>{
        try {
console.log(formValue);
                  

            for(let key in formValue){
                console.log(formValue[key],"keys")
                if(formValue[key] === ''){
                    const keys = `${key}:${key} not empty or greater then 4 char`
                    console.log(keys,"key")
                    // throw JSON.stringify(keys);
                }
                else{
                    const keys = `${key}:""`
                    throw JSON.stringify(keys)
                }
            }
            // if(firstName===''){
            //   throw JSON.stringify({"firstName":"first name not empty or greater then 4 char"});
            // }
            // else{
            //     throw JSON.stringify({"firstName":""})
            // }
            
            
        } catch (error) {
            const err = JSON.parse(error)
            console.log(err)
            setFormError(err)

        }
    },[formValue])
    return (
        <div className="container">
            <h1>Form Example</h1>
            <form onSubmit={(e) => handleSubmit(e)} onReset={(e) => handleReset(e)}>
                <div>
                    <label>First Name: </label>
                    {error.firstName?error.firstName:''}
                    <input
                        type="text"
                        name="firstName"
                        value={formData?.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                {error.lastName?error.lastName:''}
                    <label>Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData?.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData?.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gender: </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData?.gender === "Male"}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData?.gender === "Female"}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                </div>
                <div>
                    <label>Contact Number: </label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData?.contactNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Best Subject (Choose your best subject): </label>
                    <label>
                        <input
                            type="checkbox"
                            name="english"
                            checked={formData?.bestSubject?.english}
                            onChange={handleChange}
                        />
                        English
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="math"
                            checked={formData?.bestSubject?.math}
                            onChange={handleChange}
                        />
                        Math
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="tamil"
                            checked={formData?.bestSubject?.tamil}
                            onChange={handleChange}
                        />
                        Tamil
                    </label>
                </div>
                <div>
                    <label>Address: </label>
                    <textarea
                        name="address"
                        value={formData?.address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Upload Resume: </label>
                    <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>URL: </label>
                    {error.url?error.url:''}
                    <input
                        type="url"
                        name="url"
                        value={formData?.url}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Choice About: </label>
                    <textarea
                        name="choiceAbout"
                        value={formData?.choiceAbout}
                        onChange={handleChange}
                    />
                </div>
                <div className="buttonContainer">
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Form