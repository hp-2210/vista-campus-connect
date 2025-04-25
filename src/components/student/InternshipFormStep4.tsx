
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InternshipFormData } from "@/pages/StudentDashboard";
import { Upload } from "lucide-react";

interface InternshipFormStep4Props {
  formData: InternshipFormData;
  updateFormData: (data: Partial<InternshipFormData>) => void;
}

const InternshipFormStep4 = ({ formData, updateFormData }: InternshipFormStep4Props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof InternshipFormData) => {
    if (e.target.files && e.target.files.length > 0) {
      updateFormData({ [fieldName]: e.target.files[0] });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="offerLetter" className="block mb-2">Offer Letter from Company</Label>
          <div className="border rounded-md p-4 bg-gray-50">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <label htmlFor="offerLetter" className="flex items-center justify-center cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                  <input 
                    id="offerLetter"
                    type="file" 
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'offerLetter')}
                  />
                </label>
              </Button>
              <span className="text-sm text-gray-500">
                {formData.offerLetter ? formData.offerLetter.name : "No file chosen"}
              </span>
              <span className="text-xs text-gray-400">Upload PDF or Word document (Max 2MB)</span>
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="nocByHOD" className="block mb-2">NOC by HOD</Label>
          <div className="border rounded-md p-4 bg-gray-50">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <label htmlFor="nocByHOD" className="flex items-center justify-center cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                  <input 
                    id="nocByHOD"
                    type="file" 
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'nocByHOD')}
                  />
                </label>
              </Button>
              <span className="text-sm text-gray-500">
                {formData.nocByHOD ? formData.nocByHOD.name : "No file chosen"}
              </span>
              <span className="text-xs text-gray-400">Upload PDF or Word document (Max 2MB)</span>
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="studentLetterToHOD" className="block mb-2">Student Letter to HOD</Label>
          <div className="border rounded-md p-4 bg-gray-50">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <label htmlFor="studentLetterToHOD" className="flex items-center justify-center cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                  <input 
                    id="studentLetterToHOD"
                    type="file" 
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'studentLetterToHOD')}
                  />
                </label>
              </Button>
              <span className="text-sm text-gray-500">
                {formData.studentLetterToHOD ? formData.studentLetterToHOD.name : "No file chosen"}
              </span>
              <span className="text-xs text-gray-400">Upload PDF or Word document (Max 2MB)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipFormStep4;
