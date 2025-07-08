import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { Search } from "lucide-react";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const showOptions = [8, 12, 24];

const pathologyData = [
  {
    id: 1,
    doctor: "Dr. Ibrahim Yekeni",
    file: "Malaria Infection Treatment",
    time: "2:00PM",
    avatar: "", // Add avatar url if available
  },
  {
    id: 2,
    doctor: "Dr. Ebuka Kelechi",
    file: "Transcend",
    time: "5:00AM",
    avatar: "",
  },
  // ...add more data
];

const Medical: React.FC = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(12);
  const [month, setMonth] = useState("October");
  const [period, setPeriod] = useState("month");
  const [page, setPage] = useState(1);

  // Filter logic
  const filteredData = pathologyData
    .filter((item) =>
      (search === "" ||
        item.doctor.toLowerCase().includes(search.toLowerCase()) ||
        item.file.toLowerCase().includes(search.toLowerCase()))
    );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / show);
  const paginatedData = filteredData.slice((page - 1) * show, page * show);

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
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="This month" />
            </SelectTrigger>
            <SelectContent>
              {months.map(m => (
                <SelectItem key={m} value={m}>{`This month: ${m}`}</SelectItem>
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
          {["day", "week", "month"].map(opt => (
            <Button
              key={opt}
              variant={period === opt ? "default" : "outline"}
              onClick={() => setPeriod(opt)}
              className={cn(
                "rounded-full px-4 py-1",
                period === opt
                  ? "bg-red-500 text-white"
                  : "bg-transparent text-white dark:text-black"
              )}
            >
              {opt.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-gray-700 dark:border-gray-200 bg-black dark:bg-white/5 p-2 md:p-6 shadow-md overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-white dark:text-white text-sm border-b border-gray-700 dark:border-gray-200">
              <th className="py-3 px-4">DOCTOR</th>
              <th className="py-3 px-4">FILE</th>
              <th className="py-3 px-4">TIME</th>
              <th className="py-3 px-4">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr
                key={item.id}
                className="border-b border-gray-700 dark:border-gray-200 last:border-0"
              >
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span className="font-semibold text-white dark:text-white">{item.doctor}</span>
                </td>
                <td className="py-4 px-4 text-white dark:text-white">{item.file}</td>
                <td className="py-4 px-4 font-bold text-red-500">{item.time}</td>
                <td className="py-4 px-4">
                  <Button
                    className={cn(
                      "rounded-full px-6 py-2 font-semibold",
                      idx === 3 // Example: highlight one result
                        ? "bg-green-500 text-white"
                        : "bg-transparent border border-white text-white dark:text-white"
                    )}
                  >
                    VIEW RESULT
                  </Button>
                  <span className="ml-4 text-white dark:text-white">...</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Showing count */}
      <div className="mt-6 text-sm text-gray-400">
        Showing {(page - 1) * show + 1} to {Math.min(page * show, filteredData.length)} of {filteredData.length} items
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

export default Medical;