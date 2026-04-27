"use client";

import { useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Select,
    message,
    Space,
} from "antd";
import { countriesData } from "../helper/countryid";

export default function QuickInquiry() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [selectedCallingCode, setSelectedCallingCode] = useState("");

    //Use useMemo to prevent recalculation on every render
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
            label: `${c.countryCode} (+${c.callingCode})`, // Show calling code in dropdown
            searchLabel: `${c.country} (${c.countryCode}) +${c.callingCode}`,
            callingCode: c.callingCode,
            country: c.country,
        }));
    }, []); // Empty dependency array since countriesData is static

    const handleSubmit = async (values: any) => {
        //Fix: Use selectedCallingCode instead of values.callingCode
        const fullPhone = `+${selectedCallingCode}${values.phone}`;

        const emailParams = {
            name: values.name,
            company: values.company,
            email: values.email,
            phone: fullPhone,
            quantity: values.quantity,
            port: values.port,
            message: values.message,
        };

        try {
            setLoading(true);

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                emailParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );

            message.success("Message sent successfully!");
            form.resetFields();
            setSelectedCallingCode(""); //Reset calling code on success
        } catch (err) {
            console.error(err);
            message.error("Something went wrong");
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
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
                alignItems: "start",
                background:
                    "radial-gradient(1200px 600px at 75% -10%, rgba(101,163,13,.10), transparent), radial-gradient(900px 500px at -10% 10%, rgba(22,163,74,.12), transparent)",
            }}
        >
            <div
                style={{
                    padding: "2rem",
                    margin: "0 auto",
                }}
            >
                <h2
                    style={{
                        margin: "0 0 0.85rem",
                        color: "#1f3c3b",
                        fontSize: "2rem",
                    }}
                >
                    Quick Inquiry
                </h2>

                <p
                    style={{
                        margin: "0 0 1.8rem",
                        color: "#52615d",
                        lineHeight: "1.75",
                    }}
                >
                    Share your details and we’ll connect with you shortly.
                </p>

                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Row gutter={16}>
                        {/* NAME */}
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="name"
                                label="Your Name"
                                rules={[
                                    { required: true, message: "Enter your name" },
                                    { max: 75, message: "Max 75 characters allowed" },
                                    {
                                        pattern: /^[A-Za-z\s]+$/,
                                        message: "Name should not contain numbers or special characters",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    maxLength={75}
                                    style={{ borderRadius: 0 }}
                                    placeholder="Your Name"
                                />
                            </Form.Item>
                        </Col>

                        {/* COMPANY */}
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="company"
                                label="Company Name"
                                rules={[
                                    { max: 100, message: "Max 100 characters allowed" },
                                ]}
                            >
                                <Input
                                    size="large"
                                    maxLength={100}
                                    style={{ borderRadius: 0 }}
                                    placeholder="Company Name"
                                />
                            </Form.Item>
                        </Col>

                        {/* EMAIL */}
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: "Enter email" },
                                    { type: "email", message: "Invalid email" },
                                    { max: 75, message: "Max 75 characters allowed" },
                                ]}
                            >
                                <Input
                                    size="large"
                                    maxLength={75}
                                    style={{ borderRadius: 0 }}
                                    placeholder="Email Address"
                                />
                            </Form.Item>
                        </Col>

                        {/* PHONE */}
                        <Col xs={24} md={12}>
                            <Form.Item label="Phone" required>
                                <Space.Compact style={{ width: "100%" }}>
                                    <Form.Item
                                        name="countryCode"
                                        noStyle
                                        rules={[{ required: true, message: "Code required" }]}
                                    >
                                        <Select
                                            showSearch
                                            size="large"
                                            placeholder="Select Country Code"
                                            style={{ width: "30%", borderRadius: 0 }}
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
                                            { required: true, message: "Phone required" },
                                            {
                                                pattern: /^[0-9]{5,15}$/,
                                                message: "Enter valid number (only digits)",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            placeholder="Phone Number"
                                            maxLength={20}
                                            style={{ width: "70%", borderRadius: 0 }}
                                            prefix={
                                                selectedCallingCode ?
                                                    <span style={{ color: '#999', marginRight: '8px' }}>
                                                        +{selectedCallingCode}
                                                    </span> :
                                                    null
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
                                    { max: 50, message: "Max 50 characters allowed" },
                                    {
                                        pattern: /^[0-9\s]*$/,
                                        message: "Only numbers allowed",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    maxLength={50}
                                    style={{ borderRadius: 0 }}
                                    placeholder="Quantity"
                                />
                            </Form.Item>
                        </Col>

                        {/* PORT */}
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="port"
                                label="Destination Port"
                                rules={[
                                    { max: 100, message: "Max 100 characters allowed" },
                                ]}
                            >
                                <Input
                                    size="large"
                                    maxLength={100}
                                    style={{ borderRadius: 0 }}
                                    placeholder="Destination Port"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* MESSAGE */}
                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[
                            { required: true, message: "Enter message" },
                            { max: 1000, message: "Max 1000 characters allowed" },
                        ]}
                    >
                        <Input.TextArea
                            rows={5}
                            maxLength={1000}
                            showCount
                            style={{ borderRadius: 0 }}
                            placeholder="Your Message"
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        size="large"
                        style={{
                            background: "#F4CB4D",
                            color: "#1f3c3b",
                            fontWeight: 600,
                            borderRadius: 0,
                        }}
                    >
                        Send Message
                    </Button>
                </Form>
            </div>
        </section>
    );
}