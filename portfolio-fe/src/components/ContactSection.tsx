import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactRef }) => {
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});
const [isLoading, setIsLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);
  setSuccessMessage("");
  setErrorMessage("");

  try {
    const response = await fetch("https://portfolio-1-dgt1.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      setSuccessMessage(data.message);
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } else {
      setErrorMessage(data.message || "Something went wrong.");
    }
  } catch (err) {
    setErrorMessage("Failed to send message.");
  } finally {
    setIsLoading(false);
  }
};



  return (
    <section className="py-20 px-6 bg-midnight-950">
      <div ref={contactRef} className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-white via-lavender-500 to-lavender-700 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-lavender-200 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-midnight-800/30 border border-midnight-700/50 card-glow">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-lavender-200 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="bg-midnight-900/50 border border-midnight-600/50 focus:border-lavender-500 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-lavender-200 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}                        
                        placeholder="Doe"
                        className="bg-midnight-900/50 border border-midnight-600/50 focus:border-lavender-500 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-lavender-200 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="David@example.com"
                      className="bg-midnight-900/50 border border-midnight-600/50 focus:border-lavender-500 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-lavender-200 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Let's build something amazing"
                      className="bg-midnight-900/50 border border-midnight-600/50 focus:border-lavender-500 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-lavender-200 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="bg-midnight-900/50 border border-midnight-600/50 focus:border-lavender-500 text-white min-h-[120px]"
                    />
                  </div>

                  <Button 
  type="submit"
  className="w-full bg-lavender-accent hover:scale-105 transition-transform hover:duration-300 duration-700 animate-glow py-3 text-lg font-medium"
>
  <Send className="w-5 h-5 mr-2" />
  {isLoading ? "Sending..." : "Send Message"}
</Button>

{/* Feedback messages */}
{successMessage && (
  <p className="text-green-400 text-center mt-4">{successMessage}</p>
)}
{errorMessage && (
  <p className="text-red-400 text-center mt-4">{errorMessage}</p>
)}

                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-8 h-8 text-lavender-400" />,
                title: "Email",
                value: "ahmadhashmi152003@gmail.com",
              },
              {
                icon: <Phone className="w-8 h-8 text-lavender-400" />,
                title: "Phone",
                value: "+92 31514 26746",
              },
              {
                icon: <MapPin className="w-8 h-8 text-lavender-400" />,
                title: "Location",
                value: "Lahore, Pakistan",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-midnight-800/30 border border-midnight-700/50 card-glow hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-lavender-500/20 group-hover:animate-pulse-lavender">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-lavender-200">{item.value}</p>
                </CardContent>
              </Card>
            ))}

            {/* Quick Response Note */}
            <div className="mt-8 p-6 bg-gradient-to-br from-lavender-400 via-lavender-500 to-lavender-800 rounded-xl text-center shadow-md">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-3 animate-pulse-lavender" />
              <h3 className="text-xl font-bold text-lavender-100 mb-2">Quick Response</h3>
              <p className="text-lavender-200 text-sm">
                I typically respond within 24 hours. Let's make something extraordinary!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
