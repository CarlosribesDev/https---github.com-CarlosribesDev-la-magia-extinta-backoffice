import { FaEdit } from 'react-icons/fa';

type Column = {
    title: string;
    propName: string;
    maxWidth?: string;
}

interface DataTableProps {
    columns: Column[];
    data: any[];
    onEdit?: (data: any) => void;
}

export default function DataTable({ columns, data, onEdit }: DataTableProps) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={index}
                            scope="col"
                            style={{ maxWidth: column.maxWidth }}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider truncate">
                            {column.title}
                        </th>
                    ))}
                    {onEdit && 
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Acciones
                        </th>
                    }

                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, index) => (
                            <td key={index} className="px-6 py-4 whitespace-nowrap truncate" style={{ maxWidth: column.maxWidth }}>
                                {item[column.propName] ? String(item[column.propName]) : '-'}
                            </td>
                        ))}
                        {onEdit && 
                            <td className="px-8 py-4 whitespace-nowrap">
                                <button className="button-1 mr-4" onClick={() => onEdit && onEdit(item)}>
                                    <FaEdit className="mr-1" />
                                    Editar
                                </button>
                            </td>
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
