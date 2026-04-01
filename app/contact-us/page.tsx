"use client";

import { useState } from "react";
import { axiosInstance } from "../helper/api";

export default function ContactUs() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        quantity: "",
        port: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const submissionData = {
                name: form.name,
                company: form.company,
                email: form.email,
                phone: form.phone,
                quantity: form.quantity,
                port: form.port,
                message: form.message,
            };

            const response = await axiosInstance.post(
                "/tsk-contact-us",
                submissionData
            );

            if (response.data) {
                setForm({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    quantity: "",
                    port: "",
                    message: "",
                });

                setSuccess(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="container">
            <h1 style={{ color: "#7393B3" }}>Contact Us</h1>

            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <p
                    style={{
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        color: "#4e5d6c",
                        marginBottom: "1.5rem",
                    }}
                >
                    Please fill the below details and Submit the Form, we will get in touch with you in 24 hours.
                </p>

                <div
                    style={{
                        background: "#fff",
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                        padding: "24px",
                        marginBottom: "2rem",
                    }}
                >
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                        }}
                    >
                        {/* GRID */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "16px",
                            }}
                        >
                            {[
                                { name: "name", placeholder: "Your Name *", required: true },
                                { name: "company", placeholder: "Company Name" },
                                { name: "email", placeholder: "Email Address *", type: "email", required: true },
                                { name: "phone", placeholder: "Phone Number" },
                                { name: "quantity", placeholder: "Quantity Required" },
                                { name: "port", placeholder: "Destination Air/Sea Port" },
                            ].map((field, i) => (
                                <input
                                    key={i}
                                    name={field.name}
                                    type={field.type || "text"}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    onChange={handleChange}
                                    style={{
                                        width: "100%",
                                        padding: "14px 16px",
                                        fontSize: "15px",
                                        borderRadius: "10px",
                                        border: "1px solid #d0d7e2",
                                        outline: "none",
                                        boxSizing: "border-box",
                                        transition: "0.2s",
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = "#7393B3";
                                        e.target.style.boxShadow = "0 0 0 2px rgba(115,147,179,0.2)";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "#d0d7e2";
                                        e.target.style.boxShadow = "none";
                                    }}
                                />
                            ))}
                        </div>

                        {/* TEXTAREA */}
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={6}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "14px 16px",
                                fontSize: "15px",
                                borderRadius: "10px",
                                border: "1px solid #d0d7e2",
                                outline: "none",
                                resize: "none",
                                boxSizing: "border-box",
                            }}
                        />

                        {/* BUTTON */}
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button
                                type="submit"
                                style={{
                                    background: "#7393B3",
                                    color: "#fff",
                                    padding: "12px 28px",
                                    fontSize: "15px",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "0.2s",
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.background = "#5f7fa3")}
                                onMouseOut={(e) => (e.currentTarget.style.background = "#7393B3")}
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <div style={{ marginTop: "3rem" }}>

                <p style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "#4e5d6c",
                    marginBottom: "1.5rem",
                    textAlign: "center"
                }}>
                    For inquiries, orders, or partnership opportunities, please reach out:
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "24px",
                    }}
                >

                    {/* ADDRESS CARD */}
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "16px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                            padding: "24px",
                        }}
                    >
                        <h3 style={{
                            marginBottom: "16px",
                            color: "#7393B3",
                            fontSize: "18px",
                            fontWeight: 600
                        }}>
                            Visit Us
                        </h3>

                        <p style={{ margin: "4px 0", color: "#334155" }}>
                            THASWIKHA EXPORTS AND IMPORTS
                        </p>
                        <p style={{ margin: "4px 0", color: "#334155" }}>
                            Ground Floor, Plot No.221
                        </p>
                        <p style={{ margin: "4px 0", color: "#334155" }}>
                            Door No.8/8, Sreevari Enclave
                        </p>
                        <p style={{ margin: "4px 0", color: "#334155" }}>
                            Elango Street, Alwarthirunagar
                        </p>
                        <p style={{ margin: "4px 0", color: "#334155" }}>
                            Chennai, Tamil Nadu - 600087
                        </p>
                    </div>

                    {/* CONTACT CARD */}
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "16px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                            padding: "24px",
                        }}
                    >
                        <h3 style={{
                            marginBottom: "16px",
                            color: "#7393B3",
                            fontSize: "18px",
                            fontWeight: 600
                        }}>
                            Contact Details
                        </h3>

                        <div style={{ marginBottom: "16px" }}>
                            <div style={{ fontSize: "12px", color: "#94a3b8" }}>PHONE</div>
                            <a href="tel:+917358501234" style={{
                                color: "#1e293b",
                                textDecoration: "none",
                                fontWeight: 500
                            }}>
                                +91-7358501234
                            </a>
                        </div>

                        <div style={{ marginBottom: "16px" }}>
                            <div style={{ fontSize: "12px", color: "#94a3b8" }}>EMAIL</div>
                            <a href="mailto:enquiry@tskexportsandimports.com" style={{
                                color: "#1e293b",
                                textDecoration: "none",
                                fontWeight: 500
                            }}>
                                enquiry@tskexportsandimports.com
                            </a>
                        </div>

                        <div>
                            <div style={{ fontSize: "12px", color: "#94a3b8" }}>WHATSAPP</div>
                            <a
                                href="https://wa.me/917358501234"
                                target="_blank"
                                style={{
                                    color: "#25D366",
                                    textDecoration: "none",
                                    fontWeight: 500
                                }}
                            >
                                Chat with us
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}