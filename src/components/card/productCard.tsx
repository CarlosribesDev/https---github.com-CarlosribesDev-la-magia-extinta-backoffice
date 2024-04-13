import { productStatus } from "@/constants/productStatus";
import { paintingServiceStatus } from "@/constants/paintingServiceStatus"

type ProductCartdParams = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  status: productStatus;
  onClick: (product: any) => void
}

export default function ProductCard({ name, description, imageUrl, price, status, onClick }: ProductCartdParams) {
  const statusText: any = {
    [productStatus.AVAILABLE]: 'Disponible',
    [productStatus.RESERVED]: 'Reservado',
    [productStatus.RETIRED]: 'Retirado',
  }

  const statusColor: any = {
    [productStatus.AVAILABLE]: 'bg-green-200',
    [productStatus.RESERVED]: 'bg-yellow-200',
    [productStatus.RETIRED]: 'bg-red-200',
  }
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-2" onClick={onClick}>
        <img className="w-full h-64" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}€</span>
          <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${statusColor[status]}`}>{statusText[status]}</span>
      </div>
    </div>
    );
  
}
