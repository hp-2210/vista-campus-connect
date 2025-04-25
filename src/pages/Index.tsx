
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <Card className="w-full max-w-md p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Campus Connect</h1>
          <p className="text-gray-500">Choose your role to continue</p>
        </div>
        
        <div className="grid gap-4">
          <Button 
            onClick={() => navigate("/student-login")}
            className="w-full h-12 text-lg bg-purple-600 hover:bg-purple-700"
          >
            Student Login
          </Button>
          
          <Button 
            onClick={() => navigate("/admin-login")}
            variant="outline"
            className="w-full h-12 text-lg border-purple-200 hover:bg-purple-50"
          >
            Admin Login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;
