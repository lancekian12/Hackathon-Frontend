import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "./StudentSignup.css"

const StudentSignup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        studentnum: "",
        section: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        studentnum: "",
        section: "",
        password: "",
        confirmPassword: "",
    });
    const [emailExists, setEmailExists] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleValidation = async (event) => {
        event.preventDefault();

        let newErrors = {};
        let isValid = true;

        if (!form.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!form.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!form.studentnum) {
            newErrors.studentnum = 'Student Number is required';
            isValid = false;
        }

        if (!form.section) {
            newErrors.section = 'Section is required';
            isValid = false;
        }

        if (!form.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (form.password.length < 8) {
            newErrors.password = 'Password must be 8 characters long';
            isValid = false;
        }
        if (!form.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
            isValid = false;
        } else if (form.confirmPassword !== form.password) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            try {
                const response = await axios.post(
                    "https://appointment-care-api.vercel.app/api/v1/auth/Signup",
                    form // Send form directly, no need for FormData
                );

                console.log(response.data);
                setEmailExists(false);
                window.location.href = "/Admin/Home";
            } catch (error) {
                if (error.response && error.response.status === 500) {
                    setEmailExists(true);
                } else {
                    console.error("Registration failed:", error);
                }
            }
        }
    };

    return (
        <div className='col-6 phinma-logo'>
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <form onSubmit={handleValidation}> {/* Add onSubmit to the form */}
                    <label htmlFor="name" className='mt-5'>Name:</label>
                    <br />
                    <input type="text" name="name" value={form.name} onChange={handleChange} className='' placeholder='Name' required />
                    {errors.name && <div className="error">{errors.name}</div>}
                    <br />
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input type="email" name="email" value={form.email} onChange={handleChange} className='' placeholder='Email' required />
                    <br />
                    {errors.email && <div className="error">{errors.email}</div>}
                    <label htmlFor="studentnum">Student Number:</label>
                    <br />
                    <input type="text" name="studentnum" value={form.studentnum} onChange={handleChange} className='' placeholder='Student-number' required />
                    <br />
                    {errors.studentnum && <div className="error">{errors.studentnum}</div>}
                    <label htmlFor="section">Section:</label>
                    <br />
                    <input type="text" name="section" value={form.section} onChange={handleChange} className='' placeholder='Section' required />
                    <br />
                    {errors.section && <div className="error">{errors.section}</div>}
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input type="password" name="password" value={form.password} onChange={handleChange} placeholder='Password' required />
                    <br />
                    {errors.password && <div className="error">{errors.password}</div>}
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <br />
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />
                    <br />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                    <button type="submit" className='mb-3 mt-3'>Signup</button>
                    <br />
                    <span className='login-span'>You already have an account? <Link to="/" className='text-decoration-none'><span className='register-span'>Login</span></Link></span>
                    {emailExists && <div className="error">Email already exists</div>}
                </form>
            </div>
        </div>
    );
}

export default StudentSignup;
