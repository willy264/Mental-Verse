import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { Search } from "lucide-react";

const doctorsData = [
  // Example data, replace with your API data
  {
    id: 1,
    name: "Dr. Ibrahim Yekeni",
    title: "Family Doctor",
    status: "online",
    gender: "men",
    specialty: "Family Doctor",
  },
  // ...add more doctors
];

const statusOptions = [
  { value: "all", label: "All" },
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
];

const genderOptions = [
  { value: "all", label: "All" },
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
];

const showOptions = [8, 16, 24];

const Doctors: React.FC = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [gender, setGender] = useState("all");
  const [show, setShow] = useState(8);
  const [page, setPage] = useState(1);

  // Filter logic
  const filteredDoctors = doctorsData
    .filter((doc) =>
      (status === "all" || doc.status === status) &&
      (gender === "all" || doc.gender === gender) &&
      (search === "" || doc.name.toLowerCase().includes(search.toLowerCase()) || doc.title.toLowerCase().includes(search.toLowerCase()))
    );

  // Pagination logic
  const totalPages = Math.ceil(filteredDoctors.length / show);
  const paginatedDoctors = filteredDoctors.slice((page - 1) * show, page * show);

  return (
    <div className="p-4 md:p-8 w-full min-h-screen">
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-bold text-lg text-red-500">Doctors</span>
          <Select value={show.toString()} onValueChange={v => setShow(Number(v))}>
            <SelectTrigger className="w-20">
              <SelectValue placeholder="Show" />
            </SelectTrigger>
            <SelectContent>
              {showOptions.map(opt => (
                <SelectItem key={opt} value={opt.toString()}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-28">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              className="pl-8 w-64"
              placeholder="Search doctors by name or title"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          {genderOptions.map(opt => (
            <Button
              key={opt.value}
              variant={gender === opt.value ? "default" : "outline"}
              onClick={() => setGender(opt.value)}
              className={cn(
                "rounded-full px-4 py-1",
                gender === opt.value
                  ? "bg-red-500 text-white"
                  : "bg-transparent text-white dark:text-black"
              )}
            >
              {opt.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedDoctors.map((doc) => (
          <div
            key={doc.id}
            className={cn(
              "rounded-xl border border-gray-700 dark:border-gray-200 bg-black dark:bg-white/5 p-6 flex flex-col items-center shadow-md",
              "transition hover:shadow-lg"
            )}
          >
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700" />
              <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-green-500 border-2 border-black dark:border-white" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-white dark:text-white">{doc.name}</div>
              <div className="text-xs text-red-500">{doc.title}</div>
            </div>
            <div className="flex flex-col gap-2 mt-4 w-full">
              <Button variant="outline" className="w-full border-white text-white dark:text-white">CHAT</Button>
              <Button className="w-full bg-green-500 text-white">BOOK</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Showing count */}
      <div className="mt-6 text-sm text-gray-400">
        Showing {(page - 1) * show + 1} to {Math.min(page * show, filteredDoctors.length)} of {filteredDoctors.length} items
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Doctors;