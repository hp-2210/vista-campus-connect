import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import InternshipFormStep1 from "@/components/student/InternshipFormStep1";
import InternshipFormStep2 from "@/components/student/InternshipFormStep2";
import InternshipFormStep3 from "@/components/student/InternshipFormStep3";
import InternshipFormStep4 from "@/components/student/InternshipFormStep4";
import FeedbackForm from "@/components/student/FeedbackForm";
import Header from "@/components/common/Header";
import { differenceInDays } from "date-fns";

export type InternshipFormData = {
  // Step 1: Student Information
  fullName: string;
  rollNumber: string;
  course: string;
  branch: string;
  year: string;
  semester: string;
  email: string;
  mobileNumber: string;
  academicYear: string;
  
  // Step 2: Company & Role Details
  selectedCompany: string;
  companyName: string;
  roleOffered: string;
  stipend: string;
  hrName: string;
  hrMobile: string;
  hrEmail: string;
  
  // Step 3: Internship Duration
  startDate: Date | null;
  endDate: Date | null;
  
  // Step 4: Documents
  offerLetter: File | null;
  nocByHOD: File | null;
  studentLetterToHOD: File | null;
};

export type FeedbackData = {
  experience: string;
  skillsGained: string;
  learningExperience: string;
};

const StudentDashboard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<InternshipFormData>({
    fullName: "",
    rollNumber: "",
    course: "",
    branch: "",
    year: "",
    semester: "",
    email: "",
    mobileNumber: "",
    academicYear: "",
    selectedCompany: "",
    companyName: "",
    roleOffered: "",
    stipend: "",
    hrName: "",
    hrMobile: "",
    hrEmail: "",
    startDate: null,
    endDate: null,
    offerLetter: null,
    nocByHOD: null,
    studentLetterToHOD: null,
  });
  
  const [submissions, setSubmissions] = useState<InternshipFormData[]>([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const { toast } = useToast();
  
  const shouldShowFeedback = (submission: InternshipFormData) => {
    if (!submission.endDate) return false;
    return differenceInDays(new Date(), submission.endDate) >= 0;
  };

  useEffect(() => {
    const canShowFeedback = submissions.some(shouldShowFeedback);
    setShowFeedbackForm(canShowFeedback);
  }, [submissions]);
  
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const updateFormData = (stepData: Partial<InternshipFormData>) => {
    setFormData({ ...formData, ...stepData });
  };
  
  const handleSubmit = () => {
    if (!Object.values(formData).every(value => 
      value !== "" && value !== null || 
      (typeof value === "string" && value.trim() !== "")
    )) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }

    toast({
      title: "Application Submitted",
      description: "Your internship application has been submitted successfully.",
    });
    
    setSubmissions([...submissions, formData]);
    
    setCurrentStep(1);
    setFormData({
      fullName: "",
      rollNumber: "",
      course: "",
      branch: "",
      year: "",
      semester: "",
      email: "",
      mobileNumber: "",
      academicYear: "",
      selectedCompany: "",
      companyName: "",
      roleOffered: "",
      stipend: "",
      hrName: "",
      hrMobile: "",
      hrEmail: "",
      startDate: null,
      endDate: null,
      offerLetter: null,
      nocByHOD: null,
      studentLetterToHOD: null,
    });
  };
  
  const handleFeedbackSubmit = (feedbackData: FeedbackData) => {
    toast({
      title: "Feedback Submitted",
      description: "Thank you for providing your internship feedback.",
    });
    setShowFeedbackForm(false);
  };
  
  const handleViewApplications = () => {
    toast({
      description: "Viewing all your applications",
    });
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <InternshipFormStep1 formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <InternshipFormStep2 formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <InternshipFormStep3 formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <InternshipFormStep4 formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };
  
  const percentageComplete = currentStep * 25;
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="INTERNSHIP-DATA" />
      
      {showFeedbackForm ? (
        <div className="container max-w-4xl mx-auto py-8 px-4">
          <FeedbackForm onSubmit={handleFeedbackSubmit} />
        </div>
      ) : (
        <div className="container max-w-4xl mx-auto py-8 px-4">
          <Card className="p-6">
            <div className="text-center mb-6">
              <div className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600 mb-2">
                Internship Record Form
              </div>
              <h1 className="text-2xl font-bold">Internship Application</h1>
              <p className="text-gray-500">Please fill in the details of your internship for our records</p>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Step {currentStep} of 4</span>
                <span className="text-sm font-medium">{percentageComplete}% completed</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${percentageComplete}%` }}
                ></div>
              </div>
            </div>
            
            {renderStepContent()}
            
            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <Button variant="outline" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {currentStep < 4 ? (
                <Button onClick={handleNext} className="ml-auto">
                  Continue
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="ml-auto">
                  Submit Application
                </Button>
              )}
            </div>
            
            {currentStep === 1 && (
              <div className="mt-6 text-center">
                <Button variant="link" onClick={handleViewApplications}>
                  View All Applications
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
