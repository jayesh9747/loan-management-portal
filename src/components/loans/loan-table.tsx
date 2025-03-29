import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface LoanTableProps {
  columns: { field: string; header: string }[];
  data: any[];
}

export default function LoanTable({ columns, data }: LoanTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.field}>{col.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={col.field}>
                  {col.field === "action" ? (
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  ) : col.field === "interestRate" ? (
                    `${item[col.field]}%`
                  ) : (
                    item[col.field]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center">
              No loans found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}