import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import { Label } from './label';
import { useMutation } from 'react-query';

interface DeclarationFormProps {
    onSuccess: () => void;
}

const DeclarationForm: React.FC<DeclarationFormProps> = ({ onSuccess }) => {
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [year, setYear] = useState(new Date().getFullYear());

    const { mutateAsync } = useMutation(
        (data: { cpfCnpj: string; income: number; expenses: number; year: number }) => {
            return fetch('/api/declarations', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }).then((res) => res.json());
        },
        {
            onSuccess: () => {
                onSuccess();
                setCpfCnpj('');
                setIncome(0);
                setExpenses(0);
                setYear(new Date().getFullYear());
            },
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutateAsync({ cpfCnpj, income, expenses, year });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Label>CPF/CNPJ</Label>
                <Input value={cpfCnpj} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCpfCnpj(e.target.value)} required />
            </div>
            <div>
                <Label>Renda</Label>
                <Input type="number" value={income} onChange={(e: { target: { value: any; }; }) => setIncome(Number(e.target.value))} required />
            </div>
            <div>
                <Label>Despesas</Label>
                <Input type="number" value={expenses} onChange={(e: { target: { value: any; }; }) => setExpenses(Number(e.target.value))} />
            </div>
            <div>
                <Label>Ano</Label>
                <Input type="number" value={year} onChange={(e: { target: { value: any; }; }) => setYear(Number(e.target.value))} required />
            </div>
            <Button type="submit">Salvar Declaração</Button>
        </form>
    );
};

export default DeclarationForm;
