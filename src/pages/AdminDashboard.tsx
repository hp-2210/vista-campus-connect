import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filter, Download } from "lucide-react";
import Header from "@/components/common/Header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { courseOptions, branchOptions, yearOptions, companyOptions } from "@/constants/formOptions";

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
  const handleFilterChange = (value: string, field: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
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
      studentName: "",
    });
  };
  
  // Toggle column visibility
  const toggleColumnVisibility = (column: ColumnKey) => {
    setVisibleColumns(prev => ({ ...prev, [column]: !prev[column] }));
  };
  
  // Export visible columns as CSV
  const handleExportCSV = () => {
    const visibleColumnKeys = Object.entries(visibleColumns)
      .filter(([_, isVisible]) => isVisible)
      .map(([key]) => key);

    // In a real app, this would generate and download a CSV with only visible columns
    alert(`Downloading data with columns: ${visibleColumnKeys.join(", ")}`);
  };
  
  // Filter the data based on filters
  const filteredData = sampleData.filter(item => {
    return (
      (filters.year ? item.year === filters.year : true) &&
      (filters.branch ? item.branch === filters.branch : true) &&
      (filters.academicYear ? item.academicYear === filters.academicYear : true) &&
      (filters.course ? item.course === filters.course : true) &&
      (filters.company ? item.company === filters.company : true) &&
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
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select
                    value={filters.year}
                    onValueChange={(value) => handleFilterChange(value, 'year')}
                  >
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Filter by year" />
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
                  <Label htmlFor="branch">Branch</Label>
                  <Select
                    value={filters.branch}
                    onValueChange={(value) => handleFilterChange(value, 'branch')}
                  >
                    <SelectTrigger id="branch">
                      <SelectValue placeholder="Filter by branch" />
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
                  <Label htmlFor="course">Course</Label>
                  <Select
                    value={filters.course}
                    onValueChange={(value) => handleFilterChange(value, 'course')}
                  >
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Filter by course" />
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
                  <Label htmlFor="company">Company</Label>
                  <Select
                    value={filters.company}
                    onValueChange={(value) => handleFilterChange(value, 'company')}
                  >
                    <SelectTrigger id="company">
                      <SelectValue placeholder="Filter by company" />
                    </SelectTrigger>
                    <SelectContent>
                      {companyOptions.filter(option => option.value !== 'other').map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="academicYear">Academic Year</Label>
                  <Input
                    id="academicYear"
                    placeholder="Filter by academic year"
                    value={filters.academicYear}
                    onChange={(e) => handleFilterChange(e.target.value, 'academicYear')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    placeholder="Filter by student name"
                    value={filters.studentName}
                    onChange={(e) => handleFilterChange(e.target.value, 'studentName')}
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Display Columns</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {Object.entries(visibleColumns).map(([key, value]) => (
                      <DropdownMenuCheckboxItem
                        key={key}
                        checked={value}
                        onCheckedChange={() => toggleColumnVisibility(key as ColumnKey)}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button onClick={handleExportCSV} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Selected Columns
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
