
import { Day, Month, Year } from "../../faker/dmy/Dmy";
import "./SignUpForm.scss"
import { FaQuestionCircle } from "react-icons/fa";


const SignUpForm = () => {


    return (
        <div>
            <form action="" method="post" className='d-flex flex-column gap-2 '>
                <div className="form-group h-form d-flex gap-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="First name" />
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="surename" />
                </div>
                <div className="form-group ">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Mobile number or email address" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="New password" />
                </div>

                <div className="extra-opt mt-2">
                    <div className="extra-opt-dob d-flex flex-column justify-content-start align-items-start gap-2">
                        <label >Date of birth <FaQuestionCircle /> </label>
                        <div className="form-group d-flex gap-2 w-100">
                            <select className="form-control" name="" id="">
                                <option>Day</option>
                                {Day?.map((item,index) =>
                                <option value={item} key={index} selected={ new Date().getDate() == item} >{item}</option>
                                 )}
                            </select>
                            <select className="form-control" name="" id="">
                                <option>Month</option>
                                    {  Month?.map((item,index) =>
                                    <option value= {item} key={index} selected={ new Date().getMonth() == index}>{item}</option>
                                    )}


                            </select>
                            <select className="form-control" name="" id="">
                                <option>Year</option>
                                {  Year?.map((item,index) =>
                                    <option value= {item} key={index} selected={ new Date().getFullYear() == item}>{item}</option>
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
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
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