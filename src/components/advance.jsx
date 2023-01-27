import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomInput from "./CustomInput";

const Advanced = () => {
  return (
    <>
      <Formik
        initialValues={{ username: "", jobType: "", acceptedTos: false }}
        validationSchema={advancedSchema}
        // onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <CustomInput
              label="Username"
              name="Username"
              type="text"
              placeholder="Enter your Username"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Advanced;
