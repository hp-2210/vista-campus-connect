
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FeedbackData } from "@/pages/StudentDashboard";

interface FeedbackFormProps {
  onSubmit: (data: FeedbackData) => void;
}

const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    experience: "",
    skillsGained: "",
    learningExperience: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(feedbackData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="experience">Share your internship experience (maximum 200 words)</Label>
            <Textarea 
              id="experience"
              name="experience"
              placeholder="Share your internship experience..."
              value={feedbackData.experience}
              onChange={handleChange}
              className="min-h-[150px]"
              required
            />
            <span className="text-sm text-muted-foreground">Provide detailed feedback about your internship experience</span>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skillsGained">Skills Gained</Label>
            <Input
              id="skillsGained"
              name="skillsGained"
              placeholder="e.g. React, TypeScript, Project Management"
              value={feedbackData.skillsGained}
              onChange={handleChange}
              required
            />
            <span className="text-sm text-muted-foreground">List the skills you gained during your internship</span>
          </div>

          <div className="space-y-2">
            <Label htmlFor="learningExperience">Learning Experience</Label>
            <Textarea
              id="learningExperience"
              name="learningExperience"
              placeholder="Describe what you learned during your internship..."
              value={feedbackData.learningExperience}
              onChange={handleChange}
              className="min-h-[150px]"
              required
            />
            <span className="text-sm text-muted-foreground">Share your learning experience and key takeaways</span>
          </div>

          <Button type="submit" className="w-full">Submit Feedback</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
