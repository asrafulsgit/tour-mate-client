import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-12">
      {/* Contact Info Cards */}
      <Card className="gap-3 sm:gap-6">
        <CardHeader className="text-center">
          <div className="flex justify-center sm:mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Mail size={24} className="text-primary-foreground" />
            </div>
          </div>
          <CardTitle>Email</CardTitle>
        </CardHeader>
        <CardContent className="text-center sm:space-y-2">
          <p className="text-muted-foreground">For general inquiries</p>
          <p className="text-primary hover:underline font-medium">
            sourob2356@gmail.com
          </p>
          <p className="text-muted-foreground text-sm">
            Response time: Within 24 hours
          </p>
        </CardContent>
      </Card>

      <Card className="gap-3 sm:gap-6">
        <CardHeader className="text-center">
          <div className="flex justify-center sm:mb-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Phone size={24} className="text-accent-foreground" />
            </div>
          </div>
          <CardTitle>Phone</CardTitle>
        </CardHeader>
        <CardContent className="text-center sm:space-y-2">
          <p className="text-muted-foreground ">Available Mon-Fri 9AM-6PM</p>
          <p className="text-primary hover:underline font-medium">
            +880 1820286432
          </p>
          <p className="text-muted-foreground text-sm ">BDT timezone</p>
        </CardContent>
      </Card>

      <Card className="gap-3 sm:gap-6">
        <CardHeader className="text-center">
          <div className="flex justify-center sm:mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <MapPin size={24} className="text-primary-foreground" />
            </div>
          </div>
          <CardTitle>Office</CardTitle>
        </CardHeader>
        <CardContent className="text-center sm:space-y-2">
          <p className="text-muted-foreground">Visit us at</p>
          <p className="text-foreground font-medium">Dhaka, Bangladesh</p>
          <p className="text-muted-foreground text-sm">Servicing all Bangladesh</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
