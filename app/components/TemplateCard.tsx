
interface TemplateCardProps {
    name: string;
    description: string;
    category: string[];
    dateCreated: string;
    }

const TemplateCard: React.FC<TemplateCardProps> = ({
    name,
    description,
    category,
    dateCreated,
}) => (
    <div className="p-4 border rounded-md bg-white shadow-sm">
        <h3 className="font-bold text-lg mb-4">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
        <p className="text-sm text-gray-500">Created: {dateCreated}</p>
        <button className="mt-4 py-2 text-green-500">
        Use Template
        </button>
    </div>
);

export default TemplateCard;
