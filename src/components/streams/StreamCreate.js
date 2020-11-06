import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // all valid examples of using renderInput()

  // renderInput(formProps) {
  //   return (
  //     <input
  //       onChange={formProps.input.onChange}
  //       value={formProps.input.value}
  //     />
  //   );
  // }

  // renderInput(ahh) {
  //   console.log(ahh);
  //   return <input {...ahh.input} />;
  // }

  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
