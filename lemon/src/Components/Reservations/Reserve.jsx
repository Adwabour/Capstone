import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const BookingSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Table: Yup.number()
    .min(1, "Please select the number of tables")
    .max(4, "Only 4 Tables left")
    .required("Required"),
  Email: Yup.string().email("Invalid email").required("Required"),
});

function Reserve() {
  const [submitted, setsubmitted] = useState(false);
  return (
    <>
      {!submitted ? (
        <div className="w-full flex flex-col justify-center items-center h-[90%]">
          <section className="w-full flex flex-col justify-center items-center h-20%">
            <h1 className="font-semibold text-4xl text-gray-700">
              Reserve a table
            </h1>
            <p className="font-light text-gray-400">
              Please fill out the form to reserve your seats
            </p>
          </section>
          <section className="h-[70%] w-1/3">
            <Formik
              initialValues={{
                Name: "",
                Table: "",
                Email: "",
              }}
              validationSchema={BookingSchema}
              onSubmit={() => setsubmitted(true)}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col gap-3 bg-gray-100 mt-6 p-6 rounded-md">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="Name" className="text-sm text-gray-500">
                      Full name*
                    </label>
                    <Field
                      name="Name"
                      id="Name"
                      className="border p-2 rounded-md"
                    />
                    <p className="text-xs text-red-500 font-extralight">
                      {errors.Name && touched.Name ? <>{errors.Name}</> : null}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="Email" className="text-sm text-gray-500">
                      Email*
                    </label>
                    <Field
                      name="Email"
                      id="Email"
                      className="border p-2 rounded-md"
                    />
                    <p className="text-xs text-red-500 font-extralight">
                      {errors.Email && touched.Email ? (
                        <>{errors.Email}</>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="Table" className="text-sm text-gray-500">
                      Seats*
                    </label>
                    <Field
                      name="Table"
                      id="Table"
                      className="border p-2 rounded-md"
                      type="number"
                      min={1}
                      max={4}
                    />
                    <p className="text-xs text-red-500 font-extralight">
                      {errors.Table && touched.Table ? (
                        <>{errors.Table}</>
                      ) : null}
                    </p>
                  </div>
                  <div className="w-full flex justify-end">
                    <button
                      type="submit"
                      className="bg-gray-800 text-white py-2 px-8 rounded-md hover:bg-gray-900"
                    >
                      Book
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      ) : (
        <div className="w-full h-[90%] flex gap-2 flex-col items-center justify-center">
          <h2 className="font-semibold text-4xl text-gray-500 ">
            Tables successfully booked
          </h2>
          <p className="text-gray-300 font-light">
            In the meantime, checkout the menu
          </p>
          <Link
            to="/menu/"
            className="bg-gray-800 py-2 px-8 rounded-md text-white hover:bg-gray-600"
          >
            Menu
          </Link>
        </div>
      )}
    </>
  );
}

export default Reserve;
