import { useEffect, useState } from "react";
import style from "./Order.module.scss";
const Order = () => {
  // const [order, setOrder] = useState([]);
  // useEffect(() => {
  //     fetch('http://localhost:3000/order')
  //         .then((res) => res.json())
  //         .then((data) => {
  //             setOrder(data);
  //         });
  // }, []);
  //map pour plus tard
  {
    /* {order.map((order) => (
        <li key={order.id}>{order.name}</li>
    ))} */
  }
  return (
    <>
      <h1>Order</h1>
      <div class="bg-white p-14 rounded-md w-full sm:mb-36">
        <div class="flex items-center justify-between pb-6">
          <div>
            <h2 class="text-gray-600 font-semibold">Products Order</h2>
            <span class="text-xs">All products item</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="bg-gray-50 outline-none ml-1 block"
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div class="lg:ml-40 ml-10 space-x-8">
              <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                New Report
              </button>
              <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Chef
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Produit
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      À récupérer
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Jules Giraud
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Falafel
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      15/08/24
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-yellow-500 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">En attente</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                      John Doe
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                      Tacos menu extra spicy
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                      01/08/24
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-yellow-500 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">En attente</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      La régalière
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Menu Brunch ensoleillé
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      23/07/24
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-yellow-500 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">En attente</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                      Les wrapettes
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                      Délices d’Orient
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                      20/08/23
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Récupérée</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 bg-white text-sm">
                      Jules Giraud
                    </td>
                    <td class="px-5 py-5 bg-white text-sm">
                      Menu MK8
                    </td>
                    <td class="px-5 py-5 bg-white text-sm">
                      12/03/22
                    </td>
                    <td class="px-5 py-5 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Récupérée</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Order;
