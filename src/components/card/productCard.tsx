import { productStatus } from "@/constants/productStatus";
import { Product } from "@/model";

type ProductCartdParams = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  status: productStatus;
  onClick: (product: any) => void
}




export default function ProductCard({ name, description, imageUrl, price, status, onClick }: ProductCartdParams) {
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-2" onClick={onClick}>
      <img className="w-full" src={imageUrl} alt={name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}€</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{status}</span>
      </div>
    </div>
    );
  
}
