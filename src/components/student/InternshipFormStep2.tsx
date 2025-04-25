
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InternshipFormData } from "@/pages/StudentDashboard";

interface InternshipFormStep2Props {
  formData: InternshipFormData;
  updateFormData: (data: Partial<InternshipFormData>) => void;
}

const InternshipFormStep2 = ({ formData, updateFormData }: InternshipFormStep2Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Company & Role Details</h2>
      
      <div className="mb-6">
        <div className="space-y-2">
          <Label htmlFor="companyName">Full Name of the Company</Label>
          <Input
            id="companyName"
            name="companyName"
            placeholder="e.g. Google Inc."
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="roleOffered">Role Offered</Label>
          <Input
            id="roleOffered"
            name="roleOffered"
            placeholder="e.g. Software Engineer Intern"
            value={formData.roleOffered}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="stipend">Stipend (₹)</Label>
          <Input
            id="stipend"
            name="stipend"
            placeholder="e.g. 20000"
            value={formData.stipend}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="mb-6">
        <div className="space-y-2">
          <Label htmlFor="duration">Duration (months)</Label>
          <Input
            id="duration"
            name="duration"
            placeholder="e.g. 3"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">HR Contact Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="hrName">HR Name</Label>
            <Input
              id="hrName"
              name="hrName"
              placeholder="e.g. John Doe"
              value={formData.hrName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="hrMobile">HR Mobile Number</Label>
            <Input
              id="hrMobile"
              name="hrMobile"
              placeholder="e.g. 9876543210"
              value={formData.hrMobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <Label htmlFor="hrEmail">HR Email</Label>
          <Input
            id="hrEmail"
            name="hrEmail"
            placeholder="hr.email@company.com"
            value={formData.hrEmail}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default InternshipFormStep2;
