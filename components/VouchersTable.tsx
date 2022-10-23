import { modalStateStore } from "../lib/store";
import VoucherForm from "./VoucherForm";
import { DataStore } from "@aws-amplify/datastore";
import { VouchersModel } from "../src/models";
import { useData } from "../lib/hooks";
import toast from "react-hot-toast";
import LoadingStateComponent from "./LoadingState";
import React from "react";
import { VoucherType } from "../lib/types";

const VouchersTableComponent = () => {
  const open = modalStateStore((state) => state.open);
  const setOpen = modalStateStore((state) => state.setOpen);
  const [initialValues, setInitialValues] = React.useState<VoucherType>();
  const [isEditable, setIsEditable] = React.useState(false);
  const vouchers = useData(VouchersModel);

  const deleteVoucher = async (id: string) => {
    try {
      const todelete = await DataStore.query(VouchersModel, id);
      DataStore.delete(todelete!);
      toast.success("Voucher deleted");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting voucher");
    }
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mt-6">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Vouchers</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the vouchers available.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              onClick={() => {
                setInitialValues({
                  name: "",
                  discount: 0,
                  description: "",
                });
                setOpen(!open);
              }}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Create voucher
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                {vouchers.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Discount
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Description
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {vouchers.map((voucher, i: number) => (
                        <tr key={i}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {voucher.name}
                          </td>

                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {voucher.discount}% off {voucher.name}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {voucher.description}
                          </td>

                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              onClick={() => {
                                setInitialValues({
                                  id: voucher.id,
                                  name: voucher.name,
                                  discount: voucher.discount,
                                  description: voucher.description,
                                });
                                setIsEditable(true);
                                setOpen(!open);
                              }}
                              className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                            >
                              Edit
                              <span className="sr-only">, {voucher.name}</span>
                            </a>
                          </td>

                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              onClick={() => deleteVoucher(voucher.id)}
                              className="text-red-600 hover:text-red-900 cursor-pointer"
                            >
                              Delete
                              <span className="sr-only">, {voucher.name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <LoadingStateComponent />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <VoucherForm isEditable={isEditable} voucher={initialValues!} />
    </>
  );
};

export default VouchersTableComponent;
