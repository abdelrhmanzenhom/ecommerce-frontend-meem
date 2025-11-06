import ProductForm from "../product/ProductForm";
import ProductTable from "../product/ProductTable";

export default function AdminProducts() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Manage Products</h1>
      <ProductForm />
      <ProductTable />
    </div>
  );
}
