import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="bg-white flex justify-center items-center py-10 md:py-16 xl:py-22.5">
      <div data-aos="fade-up" className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[84%] max-w-360 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-10 lg:gap-12.5 w-full lg:max-w-[65%]">
          <div>
            <h2 className="text-h3 md:text-h2 font-extrabold lg:font-normal font-gilroy text-black leading-12.75 xl:w-[80%]">
              We Would Love To Hear From You
            </h2>
          </div>
          <div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-8 w-full"
            >
              {/* Name and Email */}
              <div className="flex flex-col md:flex-row gap-8 w-full">
                {/* Name */}
                <div className="flex-1 flex flex-col gap-2">
                  <div
                    className={`flex flex-col gap-2 border-b ${formik.touched.fullName && formik.errors.fullName ? "border-red-500" : "border-input-border"}`}
                  >
                    <label
                      htmlFor="fullName"
                      className="text-text-body font-sans text-sm md:text-body"
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="bg-transparent border-none outline-none text-black text-lg p-0 focus:ring-0 placeholder:text-placeholder"
                    />
                  </div>
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.fullName}
                    </div>
                  ) : null}
                </div>
                {/* Email */}
                <div className="flex-1 flex flex-col gap-2">
                  <div
                    className={`flex flex-col gap-2 border-b ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-input-border"}`}
                  >
                    <label
                      htmlFor="email"
                      className="text-text-body font-sans text-sm md:text-body"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="bg-transparent border-none outline-none text-black text-lg p-0 focus:ring-0 placeholder:text-placeholder"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* Message */}
              <div className="flex flex-col gap-2">
                <div
                  className={`flex flex-col gap-2 border-b ${formik.touched.message && formik.errors.message ? "border-red-500" : "border-input-border"}`}
                >
                  <label
                    htmlFor="message"
                    className="text-text-body font-sans text-sm md:text-body"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-transparent border-none outline-none text-black text-lg p-0 focus:ring-0 min-h-30 resize-none placeholder:text-placeholder"
                  />
                </div>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-xs">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center bg-primary text-white px-10 py-3.5 rounded-xl font-sans font-normal text-[18px] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full lg:w-[25%]">
          <h3 className="text-h4 lg:text-h3 font-bold lg:font-normal font-gilroy text-black">
            Need Help?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
