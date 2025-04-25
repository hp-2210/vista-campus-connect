
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Download, Filter } from "lucide-react";
import Header from "@/components/common/Header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data
const sampleData = [
  {
    id: 1,
    rollNo: "CS20B1001",
    studentName: "John Doe",
    year: "3",
    branch: "Computer Science",
    academicYear: "2023-24",
    course: "B.Tech",
    company: "Google",
    role: "Software Engineer Intern",
    startDate: "2023-05-15",
    endDate: "2023-07-15",
    stipend: "50000",
    offerLetter: "offer_letter_1.pdf",
    noc: "noc_1.pdf",
    feedbackSubmitted: true,
  },
  {
    id: 2,
    rollNo: "EC20B1002",
    studentName: "Jane Smith",
    year: "3",
    branch: "Electronics",
    academicYear: "2023-24",
    course: "B.Tech",
    company: "Microsoft",
    role: "Frontend Developer",
    startDate: "2023-06-01",
    endDate: "2023-08-01",
    stipend: "45000",
    offerLetter: "offer_letter_2.pdf",
    noc: "noc_2.pdf",
    feedbackSubmitted: false,
  },
  {
    id: 3,
    rollNo: "ME20B1003",
    studentName: "Robert Johnson",
    year: "4",
    branch: "Mechanical",
    academicYear: "2023-24",
    course: "B.Tech",
    company: "Amazon",
    role: "Product Manager Intern",
    startDate: "2023-05-20",
    endDate: "2023-08-20",
    stipend: "55000",
    offerLetter: "offer_letter_3.pdf",
    noc: "noc_3.pdf",
    feedbackSubmitted: true,
  },
];

type ColumnKey = "rollNo" | "studentName" | "year" | "branch" | "academicYear" | "course" | "company" | "role" | 
  "startDate" | "endDate" | "stipend" | "offerLetter" | "noc" | "feedbackSubmitted";

const AdminDashboard = () => {
  // State for filters
  const [filters, setFilters] = useState({
    year: "",
    branch: "",
    academicYear: "",
    course: "",
    company: "",
    role: "",
    duration: "",
    studentName: "",
  });
  
  // State for visible columns
  const [visibleColumns, setVisibleColumns] = useState<Record<ColumnKey, boolean>>({
    rollNo: true,
    studentName: true,
    year: true,
    branch: true,
    academicYear: true,
    course: true,
    company: true,
    role: true,
    startDate: true,
    endDate: false,
    stipend: true,
    offerLetter: true,
    noc: true,
    feedbackSubmitted: true,
  });
  
  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  // Reset all filters
  const handleResetFilters = () => {
    setFilters({
      year: "",
      branch: "",
      academicYear: "",
      course: "",
      company: "",
      role: "",
      duration: "",
      studentName: "",
    });
  };
  
  // Toggle column visibility
  const toggleColumnVisibility = (column: ColumnKey) => {
    setVisibleColumns(prev => ({ ...prev, [column]: !prev[column] }));
  };
  
  // Export data as CSV
  const handleExportCSV = () => {
    // In a real app, this would generate and download a CSV file
    alert("Downloading data as CSV...");
  };
  
  // Filter the data based on filters
  const filteredData = sampleData.filter(item => {
    return (
      (filters.year ? item.year.toLowerCase().includes(filters.year.toLowerCase()) : true) &&
      (filters.branch ? item.branch.toLowerCase().includes(filters.branch.toLowerCase()) : true) &&
      (filters.academicYear ? item.academicYear.toLowerCase().includes(filters.academicYear.toLowerCase()) : true) &&
      (filters.course ? item.course.toLowerCase().includes(filters.course.toLowerCase()) : true) &&
      (filters.company ? item.company.toLowerCase().includes(filters.company.toLowerCase()) : true) &&
      (filters.role ? item.role.toLowerCase().includes(filters.role.toLowerCase()) : true) &&
      (filters.studentName ? item.studentName.toLowerCase().includes(filters.studentName.toLowerCase()) : true)
    );
  });
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="INTERNSHIP-DATA" />
      
      <div className="container mx-auto py-8 px-4">
        <Tabs defaultValue="applications" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>
          
          <TabsContent value="applications">
            <Card className="p-6 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    name="year"
                    placeholder="Filter by year"
                    value={filters.year}
                    onChange={handleFilterChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="branch">Branch</Label>
                  <Input
                    id="branch"
                    name="branch"
                    placeholder="Filter by branch"
                    value={filters.branch}
                    onChange={handleFilterChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="academicYear">Academic Year</Label>
                  <Input
                    id="academicYear"
                    name="academicYear"
                    placeholder="Filter by academic year"
                    value={filters.academicYear}
                    onChange={handleFilterChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="course">Course</Label>
                  <Input
                    id="course"
                    name="course"
                    placeholder="Filter by course"
                    value={filters.course}
                    onChange={handleFilterChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Filter by company"
                    value={filters.company}
                    onChange={handleFilterChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    name="role"
                    placeholder="Filter by role"
                    value={filters.role}
                    onChange={handleFilterChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    name="studentName"
                    placeholder="Filter by student name"
                    value={filters.studentName}
                    onChange={handleFilterChange}
                  />
                </div>
                
                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    onClick={handleResetFilters}
                    className="w-full"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Reset Filters
                  </Button>
                </div>
              </div>
              
              <div className="mb-4 flex justify-between items-center">
                <div className="relative inline-block">
                  <Button variant="outline">Display Columns</Button>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 p-2 border hidden group-hover:block">
                    {Object.entries(visibleColumns).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                        <Checkbox 
                          id={`column-${key}`}
                          checked={value} 
                          onCheckedChange={() => toggleColumnVisibility(key as ColumnKey)}
                        />
                        <Label htmlFor={`column-${key}`} className="cursor-pointer">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button onClick={handleExportCSV} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export .CSV
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {visibleColumns.rollNo && <TableHead>Roll No</TableHead>}
                      {visibleColumns.studentName && <TableHead>Student Name</TableHead>}
                      {visibleColumns.year && <TableHead>Year</TableHead>}
                      {visibleColumns.branch && <TableHead>Branch</TableHead>}
                      {visibleColumns.academicYear && <TableHead>Academic Year</TableHead>}
                      {visibleColumns.course && <TableHead>Course</TableHead>}
                      {visibleColumns.company && <TableHead>Company</TableHead>}
                      {visibleColumns.role && <TableHead>Role</TableHead>}
                      {visibleColumns.startDate && <TableHead>Starting Date</TableHead>}
                      {visibleColumns.endDate && <TableHead>Ending Date</TableHead>}
                      {visibleColumns.stipend && <TableHead>Stipend</TableHead>}
                      {visibleColumns.offerLetter && <TableHead>Offer Letter</TableHead>}
                      {visibleColumns.noc && <TableHead>NOC</TableHead>}
                      {visibleColumns.feedbackSubmitted && <TableHead>Feedback</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <TableRow key={item.id}>
                          {visibleColumns.rollNo && <TableCell>{item.rollNo}</TableCell>}
                          {visibleColumns.studentName && <TableCell>{item.studentName}</TableCell>}
                          {visibleColumns.year && <TableCell>{item.year}</TableCell>}
                          {visibleColumns.branch && <TableCell>{item.branch}</TableCell>}
                          {visibleColumns.academicYear && <TableCell>{item.academicYear}</TableCell>}
                          {visibleColumns.course && <TableCell>{item.course}</TableCell>}
                          {visibleColumns.company && <TableCell>{item.company}</TableCell>}
                          {visibleColumns.role && <TableCell>{item.role}</TableCell>}
                          {visibleColumns.startDate && <TableCell>{item.startDate}</TableCell>}
                          {visibleColumns.endDate && <TableCell>{item.endDate}</TableCell>}
                          {visibleColumns.stipend && <TableCell>₹{item.stipend}</TableCell>}
                          {visibleColumns.offerLetter && (
                            <TableCell>
                              <Button variant="link" size="sm">View</Button>
                            </TableCell>
                          )}
                          {visibleColumns.noc && (
                            <TableCell>
                              <Button variant="link" size="sm">View</Button>
                            </TableCell>
                          )}
                          {visibleColumns.feedbackSubmitted && (
                            <TableCell>
                              {item.feedbackSubmitted ? (
                                <span className="text-green-500">Submitted</span>
                              ) : (
                                <span className="text-red-500">Pending</span>
                              )}
                            </TableCell>
                          )}
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={Object.values(visibleColumns).filter(Boolean).length} className="text-center py-10">
                          No results found. Please try different filters.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="feedback">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Student Feedback Summary</h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Roll No</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Skills Gained</TableHead>
                      <TableHead>Feedback Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.studentName}</TableCell>
                        <TableCell>{item.rollNo}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>{item.feedbackSubmitted ? "React, TypeScript, API Integration" : "-"}</TableCell>
                        <TableCell>
                          {item.feedbackSubmitted ? (
                            <span className="text-green-500">Submitted</span>
                          ) : (
                            <span className="text-red-500">Pending</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {item.feedbackSubmitted && (
                            <Button variant="outline" size="sm">View Details</Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
