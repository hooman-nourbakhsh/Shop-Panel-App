import { productListTableTHeads } from "@/constants/tableHeads";

function ProductListTable({ products }) {
  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {productListTableTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product._id}>
                <td className="table__td">{index + 1}</td>
                <td className="table__td  whitespace-nowrap font-bold">{product.title}</td>
                <td className="table__td">{product.category.title}</td>
                <td className="table__td">{product.price}</td>
                <td className="table__td">{product.discount}</td>
                <td className="table__td">{product.offPrice}</td>
                <td className="table__td">{product.countInStock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ProductListTable;
