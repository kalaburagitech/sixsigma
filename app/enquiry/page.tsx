"use client";

import type React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Send, Upload } from "lucide-react";
import { useState } from "react";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    productCategory: "",
    material: "",
    grade: "",
    quantity: "",
    dimensions: "",
    application: "",
    deliveryLocation: "",
    timeline: "",
    additionalRequirements: "",
    needCertificates: false,
    needTechnicalSupport: false,
    urgentRequest: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Enquiry submitted:", formData);
    alert(
      "Thank you for your enquiry. Our team will review your requirements and get back to you within 24 hours."
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      productCategory: "",
      material: "",
      grade: "",
      quantity: "",
      dimensions: "",
      application: "",
      deliveryLocation: "",
      timeline: "",
      additionalRequirements: "",
      needCertificates: false,
      needTechnicalSupport: false,
      urgentRequest: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const productCategories = [
    "High component capacitors",
    "DC capacitors",
    "High voltage DC capacitors",
    "Tantalum rods",
    "Tantalum sheets",
    "Titanium sheets",
    "Titanium rods",
    "Copper",
    "Stainless steel",
    "Carbon steel",
    "Alloy steel",
    "Nickel alloys",
    "Aluminum",
    "Other",
  ];

  const industries = [
    "Aerospace",
    "Automotive",
    "Chemical Processing",
    "Construction",
    "Electronics",
    "Energy & Power",
    "Food & Beverage",
    "Marine",
    "Medical",
    "Oil & Gas",
    "Pharmaceutical",
    "Other",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Product Enquiry</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Request detailed quotes and specifications for your material
              requirements. Our experts will provide customized solutions.
            </p>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-teal-600 text-center">
                    Material Enquiry Form
                  </CardTitle>
                  <p className="text-gray-600 text-center">
                    Please provide detailed information about your requirements
                    for an accurate quote
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="industry">Industry</Label>
                        <Select
                          onValueChange={(value: string) =>
                            handleSelectChange("industry", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem
                                key={industry}
                                value={industry.toLowerCase()}
                              >
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Product Requirements */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Product Requirements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="productCategory">
                            Product Category *
                          </Label>
                          <Select
                            onValueChange={(value: string) =>
                              handleSelectChange("productCategory", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select product category" />
                            </SelectTrigger>
                            <SelectContent>
                              {productCategories.map((category) => (
                                <SelectItem
                                  key={category}
                                  value={category
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}
                                >
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="material">Material Type</Label>
                          <Input
                            id="material"
                            name="material"
                            type="text"
                            value={formData.material}
                            onChange={handleChange}
                            placeholder="e.g., Stainless Steel, Titanium, Copper"
                          />
                        </div>
                        <div>
                          <Label htmlFor="grade">Grade/Specification</Label>
                          <Input
                            id="grade"
                            name="grade"
                            type="text"
                            value={formData.grade}
                            onChange={handleChange}
                            placeholder="e.g., 316L, Grade 2, ASTM A240"
                          />
                        </div>
                        <div>
                          <Label htmlFor="quantity">Quantity Required *</Label>
                          <Input
                            id="quantity"
                            name="quantity"
                            type="text"
                            required
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g., 100 kg, 50 pieces, 10 meters"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="dimensions">
                          Dimensions/Specifications
                        </Label>
                        <Textarea
                          id="dimensions"
                          name="dimensions"
                          value={formData.dimensions}
                          onChange={handleChange}
                          placeholder="Please specify dimensions, thickness, diameter, length, etc."
                          rows={3}
                        />
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="application">Application/End Use</Label>
                        <Textarea
                          id="application"
                          name="application"
                          value={formData.application}
                          onChange={handleChange}
                          placeholder="Describe how the material will be used"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Delivery & Timeline */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Delivery & Timeline
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="deliveryLocation">
                            Delivery Location *
                          </Label>
                          <Input
                            id="deliveryLocation"
                            name="deliveryLocation"
                            type="text"
                            required
                            value={formData.deliveryLocation}
                            onChange={handleChange}
                            placeholder="City, State, Country"
                          />
                        </div>
                        <div>
                          <Label htmlFor="timeline">Required Timeline</Label>
                          <Select
                            onValueChange={(value: string) =>
                              handleSelectChange("timeline", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="When do you need this?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">
                                Immediate (within 1 week)
                              </SelectItem>
                              <SelectItem value="2-weeks">
                                Within 2 weeks
                              </SelectItem>
                              <SelectItem value="1-month">
                                Within 1 month
                              </SelectItem>
                              <SelectItem value="2-months">
                                Within 2 months
                              </SelectItem>
                              <SelectItem value="flexible">
                                Flexible timeline
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Requirements */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Additional Requirements
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="needCertificates"
                            name="needCertificates"
                            checked={formData.needCertificates}
                            onCheckedChange={(checked: boolean) =>
                              setFormData({
                                ...formData,
                                needCertificates: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="needCertificates">
                            Material Test Certificates (MTC) required
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="needTechnicalSupport"
                            name="needTechnicalSupport"
                            checked={formData.needTechnicalSupport}
                            onCheckedChange={(checked: boolean) =>
                              setFormData({
                                ...formData,
                                needTechnicalSupport: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="needTechnicalSupport">
                            Technical support/consultation needed
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="urgentRequest"
                            name="urgentRequest"
                            checked={formData.urgentRequest}
                            onCheckedChange={(checked: boolean) =>
                              setFormData({
                                ...formData,
                                urgentRequest: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="urgentRequest">
                            Urgent request - priority handling
                          </Label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="additionalRequirements">
                          Additional Requirements/Comments
                        </Label>
                        <Textarea
                          id="additionalRequirements"
                          name="additionalRequirements"
                          value={formData.additionalRequirements}
                          onChange={handleChange}
                          placeholder="Any special requirements, packaging needs, or additional information..."
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* File Upload Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Attachments
                      </h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Upload drawings, specifications, or reference
                          documents
                        </p>
                        <p className="text-sm text-gray-500">
                          Supported formats: PDF, DOC, JPG, PNG (Max 10MB)
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4 bg-transparent"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-teal-600 hover:bg-teal-700 px-8"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Submit Enquiry
                      </Button>
                      <p className="text-sm text-gray-500 mt-4">
                        Our team will review your enquiry and respond within 24
                        hours
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Our Enquiry Service */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Our Enquiry Service?
              </h2>
              <p className="text-lg text-gray-600">
                Professional support throughout your procurement process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-teal-600">
                    Detailed Quotes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive quotes with specifications, pricing, and
                    delivery terms tailored to your requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-600">
                    Quick Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our technical team responds to all enquiries within 24 hours
                    with detailed information and recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-600">
                    Technical Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Expert technical consultation to help you select the right
                    materials for your specific applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
