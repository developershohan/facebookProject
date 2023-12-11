
import { useState } from "react";
import { Day, Month, Year } from "../../faker/dmy/Dmy";
import "./SignUpForm.scss"
import { FaQuestionCircle } from "react-icons/fa";


const SignUpForm = () => {

    const [gender, setGender] = useState(" ")
    const [input, setInput] = useState({
        firstName: "",
        surName: "",
        email: "",
        password: "",
        day: "",
        month: "",
        year: "",
        gender: ""
    })

    const handleInputChange = (e) => {
        setInput((prevInput) => ({

            ...prevInput,
            [e.target.name]: e.target.value

        }))

    }

    return (
        <div>
            <form action="" method="post" className='d-flex flex-column gap-2 '>
                <div className="form-group h-form d-flex gap-2">
                    <input type="text" className="form-control" placeholder="First name" name="firstName" value={input.firstName} onChange={handleInputChange} />
                    <input type="text" className="form-control" placeholder="surname" name="surName" value={input.surName} onChange={handleInputChange} />
                </div>
                <div className="form-group ">
                    <input type="text" className="form-control" placeholder="Mobile number or email address" name="email" value={input.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="New password" name="password" value={input.password} onChange={handleInputChange} />
                </div>

                <div className="extra-opt mt-2">
                    <div className="extra-opt-dob d-flex flex-column justify-content-start align-items-start gap-2">
                        <label >Date of birth <FaQuestionCircle /> </label>
                        <div className="form-group d-flex gap-2 w-100">
                            <select className="form-control" name="day" value={input.day} onChange={handleInputChange} id="">
                                <option>Day</option>
                                {Day?.map((item, index) =>
                                    <option value={item} key={index} selected={new Date().getDate() == item} >{item}</option>
                                )}
                            </select>
                            <select className="form-control" name="month" value={input.month} onChange={handleInputChange}>
                                <option>Month</option>
                                {Month?.map((item, index) =>
                                    <option value={item} key={index} selected={new Date().getMonth() == index}>{item}</option>
                                )}


                            </select>
                            <select className="form-control" name="year" value={input.year} onChange={handleInputChange}>
                                <option>Year</option>
                                {Year?.map((item, index) =>
                                    <option value={item} key={index} selected={new Date().getFullYear() == item}>{item}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="extra-opt mt-2">
                    <div className="extra-opt-gender d-flex flex-column justify-content-start align-items-start gap-2">
                        <label >Gender <FaQuestionCircle /> </label>
                        <div className="form-group d-flex justify-content-between w-100">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleInputChange} />
                                <label className="form-check-label" >
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" value="Female" onChange={handleInputChange} />
                                <label className="form-check-label" >
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio"
                                    name="gender"
                                    value="Custom" onChange={handleInputChange} />
                                <label className="form-check-label" >
                                    Custom
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm