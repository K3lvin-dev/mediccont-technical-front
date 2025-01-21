import React from 'react';
import { useQuery } from 'react-query';
import { Table } from './table';

const DeclarationList: React.FC = () => {
    const { data, isLoading = false } = useQuery('declarations', () =>
        fetch('/api/declarations').then((res) => res.json())
    );

    if (isLoading) return <div>Loading...</div>;

    return (
        <Table>
            <thead>
                <tr>
                    <th>Ano</th>
                    <th>CPF/CNPJ</th>
                    <th>Renda</th>
                    <th>Despesas</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((decl: any) => (
                    <tr key={decl.id}>
                        <td>{decl.year}</td>
                        <td>{decl.cpf_cnpj}</td>
                        <td>{decl.income}</td>
                        <td>{decl.expenses}</td>
                        <td>{decl.status}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DeclarationList;
