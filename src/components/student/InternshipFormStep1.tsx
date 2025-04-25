
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InternshipFormData } from "@/pages/StudentDashboard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courseOptions, branchOptions, yearOptions, semesterOptions } from "@/constants/formOptions";

interface InternshipFormStep1Props {
  formData: InternshipFormData;
  updateFormData: (data: Partial<InternshipFormData>) => void;
}

const InternshipFormStep1 = ({ formData, updateFormData }: InternshipFormStep1Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string, field: keyof InternshipFormData) => {
    updateFormData({ [field]: value });
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Student Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

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
          <Select 
            value={formData.course} 
            onValueChange={(value) => handleSelectChange(value, 'course')}
          >
            <SelectTrigger id="course">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              {courseOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="branch">Branch</Label>
          <Select 
            value={formData.branch} 
            onValueChange={(value) => handleSelectChange(value, 'branch')}
          >
            <SelectTrigger id="branch">
              <SelectValue placeholder="Select branch" />
            </SelectTrigger>
            <SelectContent>
              {branchOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Select 
            value={formData.year} 
            onValueChange={(value) => handleSelectChange(value, 'year')}
          >
            <SelectTrigger id="year">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {yearOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="semester">Semester</Label>
          <Select 
            value={formData.semester} 
            onValueChange={(value) => handleSelectChange(value, 'semester')}
          >
            <SelectTrigger id="semester">
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              {semesterOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
