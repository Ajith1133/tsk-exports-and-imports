export default function AboutUs() {
    return (
        <main className="container">
            <h1 style={{ color: '#7393B3' }}>About Us</h1>

            <p><strong>TSK Exports and Imports</strong> is a leading exporter of premium rice varieties, committed to quality and customer satisfaction. Established in 2016 in Chennai, Tamil Nadu, India, as Thaswikha Exports and Imports, we focus on reaching international markets to meet global supply and demand.</p>

            <p>We specialize in all varieties of Non-Basmati Rice that meet superior international standards. We believe quality is the primary aspect of any business, especially in exports and imports—our motto is “No Quality – No Business.” With decades of experience, we have established ourselves as one of India's leading exporters.</p>

            <p>We mainly focus on the following Non-Basmati Rice varieties:</p>
            <ul>
                <li>Sona Masoori Raw / Steam Rice</li>
                <li>Ponni Parboiled Rice</li>
                <li>IR64 Long Grain Parboiled / Raw Rice</li>
                <li>Swarna Parboiled Rice</li>
                <li>Broken Rice</li>
            </ul>

            <p><strong>We are committed to satisfying customers and building lasting trust.</strong></p>

            <section>

                <h2 style={{ color: '#7393B3' }}>Why Choose Us?</h2>

                <ul>
                    <li>
                        <strong>Best Service:</strong> We always strive to provide the best service to our customers.
                    </li>
                    <li>
                        <strong>Timely Delivery:</strong> Our experienced team ensures products are delivered within the agreed time.
                    </li>
                    <li>
                        <strong>Experienced Professional Team:</strong> Our team has strong expertise in the export industry and works as per client requirements.
                    </li>
                    <li>
                        <strong>Client-Centric Approach:</strong> We aim to meet customer expectations and remain flexible to their needs.
                    </li>
                    <li>
                        <strong>Best Quality & Cost Effective:</strong> We believe quality and cost-effectiveness are key — “No Quality, No Business”.
                    </li>
                </ul>

                <p>
                    Our organization is a member of APEDA and the Spice Board of India.
                </p>

                <p>
                    Customer satisfaction has always been our main focus. We strive to build trust and long-term relationships with our clients.
                </p>

                <h3>Registered Address</h3>

                <p>
                    THASWIKHA EXPORTS AND IMPORTS <br />
                    Ground Floor, Plot No.221, Door No.8/8 <br />
                    Sreevari Enclave, Elango Street <br />
                    Alwarthirunagar, Chennai, Tamil Nadu – 600087
                </p>

                <p>
                    <strong>Contact / WhatsApp:</strong> +91 73585 01234 / +91 9003062532 <br />
                    <strong>Email:</strong> enquiry@tskexportsandimports.com <br />
                    <strong>Website:</strong> www.tskexportsandimports.com
                </p>

            </section>

            <section>
                <h2>Our Registered Certificates</h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "24px",
                    }}
                >
                    <div>
                        <img
                            src="https://tskexportsandimports.com/web/wp-content/uploads/2022/07/IEC-1.png"
                            alt="IEC Certificate"
                            width={400}
                            height={600}
                            style={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', maxWidth: '100%', height: 'auto', margin: '0 auto' }}
                        />
                    </div>

                    <div>
                        <img
                            src="https://tskexportsandimports.com/web/wp-content/uploads/2022/07/BGST.png"
                            alt="GST Certificate"
                            width={400}
                            height={600}
                            style={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', maxWidth: '100%', height: 'auto', margin: '0 auto' }}
                        />
                    </div>

                    <div>
                        <img
                            src="https://tskexportsandimports.com/web/wp-content/uploads/2022/07/FSSAI.png"
                            alt="FSSAI Certificate"
                            width={400}
                            height={600}
                            style={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', maxWidth: '100%', height: 'auto', margin: '0 auto' }}
                        />
                    </div>

                    <div>
                        <img
                            src="https://tskexportsandimports.com/web/wp-content/uploads/2022/07/GAPEDA.png"
                            alt="APEDA Certificate"
                            width={400}
                            height={600}
                            style={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', maxWidth: '100%', height: 'auto', margin: '0 auto' }}
                        />
                    </div>

                </div>
            </section>

        </main>
    );
}



// import Image from "next/image";
// import { CheckCircle, Globe, Award, ShieldCheck, Clock, Users } from "lucide-react"; // Using lucide-react for modern icons

// export default function AboutUs() {
//     return (
//         <main className="bg-gray-50 pb-20">
//             {/* --- Hero Section --- */}
//             <div className="bg-slate-900 text-white py-20 px-6">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <h1 className="text-4xl md:text-6xl font-bold mb-6">TSK Exports</h1>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                         Leading the global grain trade from Chennai since 2016.
//                         Premium quality rice varieties delivered with integrity and excellence.
//                     </p>
//                 </div>
//             </div>

//             <div className="max-w-6xl mx-auto px-6 -mt-10">
//                 {/* --- Overview Section --- */}
//                 <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Legacy & Mission</h2>
//                             <p className="text-gray-600 mb-4 leading-relaxed">
//                                 Established in 2016 as <strong>Thaswikha Exports and Imports</strong>,
//                                 we have grown into a powerhouse in the Indian export sector.
//                                 Our philosophy is simple: <span className="text-blue-600 font-semibold italic">“No Quality – No Business.”</span>
//                             </p>
//                             <p className="text-gray-600 mb-6">
//                                 We specialize in high-standard Non-Basmati Rice, ensuring that every grain
//                                 shipped from our facilities meets international benchmarks.
//                             </p>
//                             <div className="grid grid-cols-2 gap-4">
//                                 {["Sona Masoori", "Ponni Parboiled", "IR64 Long Grain", "Swarna Rice"].map((rice) => (
//                                     <div key={rice} className="flex items-center gap-2 text-sm font-medium text-gray-700">
//                                         <CheckCircle className="text-green-500 w-4 h-4" /> {rice}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
//                             <h3 className="text-xl font-bold text-blue-900 mb-4">Accredited Excellence</h3>
//                             <p className="text-blue-800/80 mb-6">
//                                 Proud members of prestigious organizations, ensuring trust in every transaction.
//                             </p>
//                             <div className="flex gap-4 items-center">
//                                 <div className="bg-white p-3 rounded shadow-sm font-bold text-gray-400">APEDA</div>
//                                 <div className="bg-white p-3 rounded shadow-sm font-bold text-gray-400">SPICE BOARD</div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* --- Why Choose Us (Grid) --- */}
//                 <section className="mb-20">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose TSK?</h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <FeatureCard
//                             icon={<ShieldCheck className="w-8 h-8 text-blue-600" />}
//                             title="Quality First"
//                             desc="Adhering to strict international standards with a 'No Quality, No Business' policy."
//                         />
//                         <FeatureCard
//                             icon={<Clock className="w-8 h-8 text-blue-600" />}
//                             title="Timely Delivery"
//                             desc="Our logistics team ensures your cargo reaches its destination exactly when promised."
//                         />
//                         <FeatureCard
//                             icon={<Users className="w-8 h-8 text-blue-600" />}
//                             title="Client-Centric"
//                             desc="Flexible solutions tailored to the unique requirements of your specific market."
//                         />
//                     </div>
//                 </section>

//                 {/* --- Certificates Section --- */}
//                 <section className="mb-20">
//                     <div className="flex items-center justify-between mb-8">
//                         <h2 className="text-3xl font-bold text-gray-800">Global Certifications</h2>
//                         <span className="h-1 flex-grow mx-6 bg-gray-200 hidden md:block"></span>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                         {[
//                             { src: "IEC-1.png", alt: "IEC" },
//                             { src: "BGST.png", alt: "GST" },
//                             { src: "FSSAI.png", alt: "FSSAI" },
//                             { src: "GAPEDA.png", alt: "APEDA" }
//                         ].map((img) => (
//                             <div key={img.alt} className="group overflow-hidden rounded-lg border bg-white p-2 transition-all hover:shadow-lg">
//                                 <Image
//                                     src={`https://tskexportsandimports.com/web/wp-content/uploads/2022/07/${img.src}`}
//                                     alt={img.alt}
//                                     width={400}
//                                     height={600}
//                                     className="rounded transition-transform group-hover:scale-105"
//                                 />
//                                 <p className="text-center text-xs font-bold text-gray-400 mt-2 uppercase">{img.alt} Certified</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* --- Contact / Address Section --- */}
//                 <section className="bg-slate-800 text-white rounded-2xl overflow-hidden flex flex-col md:flex-row">
//                     <div className="p-10 md:w-1/2">
//                         <h2 className="text-2xl font-bold mb-6">Registered Office</h2>
//                         <address className="not-italic text-gray-300 space-y-2 mb-8">
//                             <p className="text-white font-semibold">THASWIKHA EXPORTS AND IMPORTS</p>
//                             <p>Ground Floor, Plot No.221, Door No.8/8</p>
//                             <p>Sreevari Enclave, Elango Street</p>
//                             <p>Alwarthirunagar, Chennai, Tamil Nadu – 600087</p>
//                         </address>
//                         <div className="space-y-2">
//                             <p><span className="text-blue-400 font-medium">WhatsApp:</span> +91 73585 01234</p>
//                             <p><span className="text-blue-400 font-medium">Email:</span> enquiry@tskexportsandimports.com</p>
//                         </div>
//                     </div>
//                     <div className="bg-slate-700 p-10 md:w-1/2 flex flex-col justify-center text-center">
//                         <h3 className="text-2xl font-bold mb-4">Start Your Order</h3>
//                         <p className="mb-6 text-gray-300">Building lasting trust through premium quality exports.</p>
//                         <a href="mailto:enquiry@tskexportsandimports.com" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-bold transition-colors inline-block self-center">
//                             Contact Us Now
//                         </a>
//                     </div>
//                 </section>
//             </div>
//         </main>
//     );
// }

// // Sub-component for clean code
// function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
//     return (
//         <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
//             <div className="mb-4">{icon}</div>
//             <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
//         </div>
//     );
// }