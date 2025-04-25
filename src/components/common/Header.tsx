
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  
  const handleProfileClick = () => {
    // In a real app, this would show profile options or navigate to profile page
  };

  const handleLogout = () => {
    navigate("/");
  };
  
  return (
    <header className="bg-gray-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          onClick={handleProfileClick}
          className="rounded-full p-2 hover:bg-gray-700"
        >
          <div className="bg-gray-300 rounded-full p-2">
            <User className="h-5 w-5 text-gray-600" />
          </div>
          <span className="ml-2">Profile</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
