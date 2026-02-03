import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Contact Info Cards */}
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Mail size={24} className="text-primary-foreground" />
            </div>
          </div>
          <CardTitle>Email</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-2">For general inquiries</p>
          <a
            href="mailto:info@tourmate.com"
            className="text-primary hover:underline font-medium"
          >
            info@tourmate.com
          </a>
          <p className="text-muted-foreground text-sm mt-2">
            Response time: Within 24 hours
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Phone size={24} className="text-accent-foreground" />
            </div>
          </div>
          <CardTitle>Phone</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-2">
            Available Mon-Fri 9AM-6PM
          </p>
          <a
            href="tel:+8801234567890"
            className="text-primary hover:underline font-medium"
          >
            +880 1234 567890
          </a>
          <p className="text-muted-foreground text-sm mt-2">BDT timezone</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <MapPin size={24} className="text-primary-foreground" />
            </div>
          </div>
          <CardTitle>Office</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-2">Visit us at</p>
          <p className="text-foreground font-medium">Dhaka, Bangladesh</p>
          <p className="text-muted-foreground text-sm mt-2">
            Servicing all of Asia
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
