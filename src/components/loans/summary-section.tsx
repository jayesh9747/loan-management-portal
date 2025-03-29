import React from 'react';

interface SummaryItem {
    label: string;
    value: React.ReactNode;
}

interface SummarySectionProps {
    title: string;
    items: SummaryItem[];
    titleClass?: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({
    title,
    items,
    titleClass = 'text-xl font-semibold mb-4',
}) => {
    return (
        <div>
            <h2 className={titleClass}>{title}</h2>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                        <span className="text-gray-500">{item.label}</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SummarySection;