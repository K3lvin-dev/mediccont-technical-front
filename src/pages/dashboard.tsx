import React, { useState } from 'react';
import DeclarationForm from '@/components/ui/DeclaracaoForm';
import DeclarationList from '@/components/ui/DeclarationList';

const Dashboard: React.FC = () => {
    const [refresh, setRefresh] = useState(false);

    return (
        <div>
            <h1>Declaração de Imposto de Renda</h1>
            <DeclarationForm onSuccess={() => setRefresh(!refresh)} />
            <h2>Histórico de Preenchimentos</h2>
            <DeclarationList key={refresh ? 'refresh' : 'normal'} />
        </div>
    );
};

export default Dashboard;
