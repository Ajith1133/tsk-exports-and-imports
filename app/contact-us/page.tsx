"use client";

import { useState, useMemo } from "react";
import emailjs from '@emailjs/browser';
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Select,
    message,
    Space,
    ConfigProvider,
} from "antd";
import { countriesData } from "../helper/countryid";
import { useGetBreakpoints } from "../hooks/useGetBreakpoints";

export default function ContactUs() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [selectedCallingCode, setSelectedCallingCode] = useState("");
    const { isMobile } = useGetBreakpoints();
    
    // Use useMemo to prevent recalculation on every render
    const countryOptions = useMemo(() => {
        // Filter countries with valid data and remove duplicates by callingCode
        const countryCodes = countriesData
            .filter((c) => c.country && c.callingCode && c.callingCode !== "+0")
            .filter(
                (c, i, arr) =>
                    i === arr.findIndex((o) => o.callingCode === c.callingCode)
            );

        // Map to options format
        return countryCodes.map((c) => ({
            value: c.countryCode,
            label: `${c.countryCode} (+${c.callingCode})`,
            searchLabel: `${c.country} (${c.countryCode}) +${c.callingCode}`,
            callingCode: c.callingCode,
            country: c.country,
        }));
    }, []);

    const handleSubmit = async (values: any) => {
        // Combine country code and phone number
        const fullPhone = `+${selectedCallingCode}${values.phone}`;

        const emailParams = {
            name: values.name,
            company: values.company || "",
            email: values.email,
            phone: fullPhone,
            message: values.message,
            quantity: values.quantity || "",
            port: values.port || "",
        };

        try {
            setLoading(true);
            setError("");

            const emailResponse = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                emailParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );

            if (emailResponse.status === 200) {
                console.log('Email sent successfully!');
                message.success("Form submitted successfully! We'll get back to you soon.");
                form.resetFields();
                setSelectedCallingCode("");
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            }
        } catch (error) {
            console.error("Error sending email:", error);
            message.error("Something went wrong. Please try again.");
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleCountryCodeChange = (value: string) => {
        const selectedCountry = countryOptions.find(c => c.value === value);
        setSelectedCallingCode(selectedCountry?.callingCode || "");
        form.setFieldValue("countryCode", value);
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#F4CB4D",
                },
                components: {
                    Input: {
                        activeBorderColor: "#F4CB4D",
                        hoverBorderColor: "#F4CB4D",
                        activeShadow: "0 0 0 2px rgba(244, 203, 77, 0.2)",
                    },
                    Select: {
                        activeBorderColor: "#F4CB4D",
                        hoverBorderColor: "#F4CB4D",
                    },
                },
            }}
        >
            <main style={{
                margin: "0 auto",
                padding: "2rem 1rem",
                fontFamily: "Segoe UI, Arial, sans-serif",
                color: "#1f3c3b",
                maxWidth: isMobile ? "100%" : "80%",
                overflowX: "hidden",
            }}>
                <h1 style={{ 
                    color: "#1E2D3B",
                    fontSize: isMobile ? "clamp(1.5rem, 6vw, 2rem)" : "2rem"
                }}>
                    Contact Us
                </h1>
                
                <div style={{ margin: "0 auto" }}>
                    <p style={{
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        fontWeight: 500,
                        color: "#4e5d6c",
                        marginBottom: "1.5rem",
                    }}>
                        Please fill the below details and Submit the Form, we will get in touch with you in 24 hours.
                    </p>

                    {success && (
                        <div style={{
                            backgroundColor: "#d4edda",
                            color: "#155724",
                            padding: "12px 20px",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            border: "1px solid #c3e6cb",
                        }}>
                            Form submitted successfully! We'll get back to you soon.
                        </div>
                    )}

                    {error && (
                        <div style={{
                            backgroundColor: "#f8d7da",
                            color: "#721c24",
                            padding: "12px 20px",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            border: "1px solid #f5c6cb",
                        }}>
                            {error}
                        </div>
                    )}

                    <div style={{
                        background: "#fff",
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                        padding: isMobile ? "16px" : "24px",
                        marginBottom: "2rem",
                    }}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                            }}
                        >
                            <Row gutter={[16, 16]}>
                                {/* NAME */}
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="name"
                                        label="Your Name"
                                        rules={[
                                            { required: true, message: "Please input your name!" },
                                            { max: 100, message: "Name must be less than 100 characters" },
                                            {
                                                pattern: /^[A-Za-z\s]+$/,
                                                message: "Name should not contain numbers or special characters",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            maxLength={100}
                                            placeholder="Your Name *"
                                            style={{
                                                padding: "14px 16px",
                                                fontSize: "15px",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Form.Item>
                                </Col>

                                {/* COMPANY */}
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="company"
                                        label="Company Name"
                                        rules={[
                                            { max: 100, message: "Company name must be less than 100 characters" },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            maxLength={100}
                                            placeholder="Company Name"
                                            style={{
                                                padding: "14px 16px",
                                                fontSize: "15px",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Form.Item>
                                </Col>

                                {/* EMAIL */}
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[
                                            { required: true, message: "Please input your E-mail!" },
                                            { type: "email", message: "The input is not a valid E-mail!" },
                                            { max: 75, message: "Email must be less than 75 characters" },
                                        ]}
                                        normalize={(value) => value?.trim().toLowerCase()}
                                    >
                                        <Input
                                            size="large"
                                            maxLength={75}
                                            placeholder="Email Address *"
                                            style={{
                                                padding: "14px 16px",
                                                fontSize: "15px",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Form.Item>
                                </Col>

                                {/* PHONE with Country Code */}
                                <Col xs={24} md={12}>
                                    <Form.Item label="Phone Number" required>
                                        <Space.Compact style={{ width: "100%" }}>
                                            <Form.Item
                                                name="countryCode"
                                                noStyle
                                                rules={[{ required: true, message: "Please select country code" }]}
                                            >
                                                <Select
                                                    showSearch
                                                    size="large"
                                                    placeholder="Code"
                                                    style={{
                                                        width: "35%",
                                                        borderRadius: "10px 0 0 10px",
                                                        fontSize: "15px",
                                                    }}
                                                    optionFilterProp="searchLabel"
                                                    options={countryOptions}
                                                    onChange={handleCountryCodeChange}
                                                    filterOption={(input, option: any) =>
                                                        option?.searchLabel
                                                            ?.toLowerCase()
                                                            .includes(input.toLowerCase())
                                                    }
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name="phone"
                                                noStyle
                                                rules={[
                                                    {
                                                        pattern: /^[0-9]{5,15}$/,
                                                        message: "Please enter a valid phone number (5-15 digits)",
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    size="large"
                                                    placeholder="Phone Number"
                                                    maxLength={20}
                                                    style={{
                                                        width: "65%",
                                                        borderRadius: "0 10px 10px 0",
                                                        padding: "14px 16px",
                                                        fontSize: "15px",
                                                    }}
                                                    prefix={
                                                        <span style={{ color: '#999', marginRight: '8px' }}>
                                                            {selectedCallingCode ? `+${selectedCallingCode}` : ''}
                                                        </span>
                                                    }
                                                />
                                            </Form.Item>
                                        </Space.Compact>
                                    </Form.Item>
                                </Col>

                                {/* QUANTITY */}
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="quantity"
                                        label="Quantity Required"
                                        rules={[
                                            { max: 50, message: "Quantity must be less than 50 characters" },
                                            {
                                                pattern: /^[0-9\s]*$/,
                                                message: "Only numbers allowed",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            maxLength={50}
                                            placeholder="Quantity Required"
                                            style={{
                                                padding: "14px 16px",
                                                fontSize: "15px",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Form.Item>
                                </Col>

                                {/* PORT */}
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="port"
                                        label="Destination Port"
                                        rules={[
                                            { max: 100, message: "Port must be less than 100 characters" },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            maxLength={100}
                                            placeholder="Destination Air/Sea Port"
                                            style={{
                                                padding: "14px 16px",
                                                fontSize: "15px",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* MESSAGE */}
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[
                                    { required: true, message: "Please input your message!" },
                                    { max: 1000, message: "Message must be less than 1000 characters" },
                                ]}
                            >
                                <Input.TextArea
                                    rows={6}
                                    maxLength={1000}
                                    showCount
                                    placeholder="Your Message *"
                                    style={{
                                        padding: "14px 16px",
                                        fontSize: "15px",
                                        borderRadius: "10px",
                                    }}
                                />
                            </Form.Item>

                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    size="large"
                                    style={{
                                        background: loading ? "#7c6b3a" : "#F4CB4D",
                                        color: "#1E2D3B",
                                        padding: "12px 28px",
                                        fontSize: "15px",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontWeight: 600,
                                        height: "auto",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!loading) {
                                            e.currentTarget.style.background = "#7c6b3a";
                                            e.currentTarget.style.color = "#d1d5db";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!loading) {
                                            e.currentTarget.style.background = "#F4CB4D";
                                            e.currentTarget.style.color = "#1E2D3B";
                                        }
                                    }}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                {/* Contact Information Section - Mobile Responsive */}
                <div style={{ marginTop: "3rem" }}>
                    <p style={{
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        fontWeight: 500,
                        color: "#4e5d6c",
                        marginBottom: "1.5rem",
                        textAlign: "center"
                    }}>
                        For inquiries, orders, or partnership opportunities, please reach out:
                    </p>

                    {/* ✅ Mobile: Stack vertically, Desktop: Side by side */}
                    <div style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: "24px",
                    }}>
                        {/* Address Card */}
                        <div style={{
                            flex: 1,
                            background: "#fff",
                            borderRadius: "16px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                            padding: isMobile ? "20px" : "24px",
                        }}>
                            <h3 style={{
                                marginBottom: "16px",
                                color: "#7393B3",
                                fontSize: isMobile ? "16px" : "18px",
                                fontWeight: 600
                            }}>
                                Visit Us
                            </h3>

                            <p style={{ margin: "4px 0", color: "#334155", fontSize: isMobile ? "14px" : "16px" }}>
                                THASWIKHA EXPORTS AND IMPORTS
                            </p>
                            <p style={{ margin: "4px 0", color: "#334155", fontSize: isMobile ? "14px" : "16px" }}>
                                Ground Floor, Plot No.221
                            </p>
                            <p style={{ margin: "4px 0", color: "#334155", fontSize: isMobile ? "14px" : "16px" }}>
                                Door No.8/8, Sreevari Enclave
                            </p>
                            <p style={{ margin: "4px 0", color: "#334155", fontSize: isMobile ? "14px" : "16px" }}>
                                Elango Street, Alwarthirunagar
                            </p>
                            <p style={{ margin: "4px 0", color: "#334155", fontSize: isMobile ? "14px" : "16px" }}>
                                Chennai, Tamil Nadu - 600087
                            </p>
                        </div>

                        {/* Contact Details Card */}
                        <div style={{
                            flex: 1,
                            background: "#fff",
                            borderRadius: "16px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                            padding: isMobile ? "20px" : "24px",
                        }}>
                            <h3 style={{
                                marginBottom: "16px",
                                color: "#7393B3",
                                fontSize: isMobile ? "16px" : "18px",
                                fontWeight: 600
                            }}>
                                Contact Details
                            </h3>

                            <div style={{ marginBottom: "16px" }}>
                                <div style={{ fontSize: isMobile ? "11px" : "12px", color: "#94a3b8" }}>PHONE</div>
                                <a href="tel:+917358501234" style={{
                                    color: "#1e293b",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    borderBottom: "none",
                                    fontSize: isMobile ? "14px" : "16px",
                                }}>
                                    +91-7358501234
                                </a>
                            </div>

                            <div style={{ marginBottom: "16px" }}>
                                <div style={{ fontSize: isMobile ? "11px" : "12px", color: "#94a3b8" }}>EMAIL</div>
                                <a href="mailto:enquiry@tskexportsandimports.com" style={{
                                    color: "#1e293b",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    borderBottom: "none",
                                    fontSize: isMobile ? "14px" : "16px",
                                    wordBreak: "break-word",
                                }}>
                                    enquiry@tskexportsandimports.com
                                </a>
                            </div>

                            <div>
                                <div style={{ fontSize: isMobile ? "11px" : "12px", color: "#94a3b8" }}>WHATSAPP</div>
                                <a
                                    href="https://wa.me/917358501234"
                                    target="_blank"
                                    style={{
                                        color: "#25D366",
                                        textDecoration: "none",
                                        fontWeight: 500,
                                        borderBottom: "none",
                                        fontSize: isMobile ? "14px" : "16px",
                                    }}
                                >
                                    Chat with us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </ConfigProvider>
    );
}