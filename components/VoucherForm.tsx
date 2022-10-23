import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Field, Form, Formik } from "formik";
import { VoucherFormPropsType } from "../lib/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { modalStateStore } from "../lib/store";
import * as Yup from "yup";
import { DataStore } from "aws-amplify";
import { VouchersModel } from "../src/models";
import toast from "react-hot-toast";

const VoucherForm = ({ isEditable, voucher }: VoucherFormPropsType) => {
  const open = modalStateStore((state) => state.open);
  const setOpen = modalStateStore((state) => state.setOpen);
  const cancelButtonRef = useRef(null);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name is too short. Minimum 3 characters")
      .max(50, "Name is too long. Maximum 50 characters"),
    discount: Yup.number()
      .required("Please type a number")
      .min(1, "Discount must be greater than 0")
      .max(100, "Discount must be less than 100"),
    description: Yup.string()
      .required("Please type a description")
      .min(3, "Description is too short. Minimum 3 characters")
      .max(50, "Description is too long. Maximum 50 characters"),
  });

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <Formik
                    initialValues={voucher}
                    validationSchema={ValidationSchema}
                    onSubmit={async (values) => {
                      await new Promise((resolve) => setTimeout(resolve, 500));

                      try {
                        if (isEditable) {
                          const original = await DataStore.query(
                            VouchersModel,
                            voucher.id!
                          );

                          await DataStore.save(
                            VouchersModel.copyOf(original!, (updated) => {
                              updated.name = values.name;
                              updated.discount = values.discount;
                              updated.description = values.description;
                            })
                          );
                          toast.success("Voucher updated successfully");
                        } else {
                          await DataStore.save(new VouchersModel(values));
                          toast.success("Voucher saved successfully");
                        }
                        setOpen(false);
                      } catch (error) {
                        console.log(error);
                        toast.error("Error saving voucher");
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div>
                          <div
                            className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${
                              (errors.name && touched.name) ||
                              (errors.discount && touched.discount) ||
                              (errors.description && touched.description)
                                ? "bg-red-100"
                                : "bg-green-100"
                            } `}
                          >
                            {(errors.name && touched.name) ||
                            (errors.discount && touched.discount) ||
                            (errors.description && touched.description) ? (
                              <XMarkIcon
                                className="h-6 w-6 text-red-600"
                                aria-hidden="true"
                              />
                            ) : (
                              <CheckIcon
                                className="h-6 w-6 text-green-600"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                          <div className="mt-3 text-center sm:mt-5">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              {isEditable ? "Edit" : "Create"} Voucher
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Complete the form below to create a new voucher.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-6 sm:space-y-5 mt-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                              <div className="sm:col-span-6">
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Name
                                </label>
                                <div className="mt-1">
                                  <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    placeholder="Voucher Name"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                  />

                                  {errors.name && touched.name && (
                                    <div className="text-red-500 text-sm">
                                      {errors.name}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="sm:col-span-6">
                                <label
                                  htmlFor="discount"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Discount
                                </label>
                                <div className="mt-1">
                                  <Field
                                    type="number"
                                    name="discount"
                                    id="discount"
                                    autoComplete="discount"
                                    placeholder="Voucher Discount"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                  />

                                  {errors.discount && touched.discount && (
                                    <div className="text-red-500 text-sm">
                                      {errors.discount}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="sm:col-span-12">
                                <label
                                  htmlFor="description"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Description
                                </label>
                                <div className="mt-1">
                                  <Field
                                    as="textarea"
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="You can write a description here."
                                  />

                                  {errors.description &&
                                    touched.description && (
                                      <div className="text-red-500 text-sm">
                                        {errors.description}
                                      </div>
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                          >
                            {isEditable ? "Update" : "Save"}
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default VoucherForm;
