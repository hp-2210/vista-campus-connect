
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InternshipFormData } from "@/pages/StudentDashboard";

interface InternshipFormStep1Props {
  formData: InternshipFormData;
  updateFormData: (data: Partial<InternshipFormData>) => void;
}

const InternshipFormStep1 = ({ formData, updateFormData }: InternshipFormStep1Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Student Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="rollNumber">Roll Number</Label>
          <Input
            id="rollNumber"
            name="rollNumber"
            placeholder="e.g. CS20B1001"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="course">Course</Label>
          <Input
            id="course"
            name="course"
            placeholder="e.g. B.Tech"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="branch">Branch</Label>
          <Input
            id="branch"
            name="branch"
            placeholder="e.g. Computer Science"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            name="year"
            placeholder="e.g. 3"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="semester">Semester</Label>
          <Input
            id="semester"
            name="semester"
            placeholder="e.g. 5"
            value={formData.semester}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input
            id="mobileNumber"
            name="mobileNumber"
            placeholder="e.g. 9876543210"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="academicYear">Academic Year</Label>
          <Input
            id="academicYear"
            name="academicYear"
            placeholder="e.g. 2023-24"
            value={formData.academicYear}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default InternshipFormStep1;
