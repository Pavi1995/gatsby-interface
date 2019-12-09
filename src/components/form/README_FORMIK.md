## Formik examples of usage

### with \*Field(s) and explicit subcomponents

In cases we need full control over the all inner parts of field.explicit With subcomponents explicitly placed as a `children` of `*Field` component

```javascript
import { Formik, Form } from "formik"
import * as Yup from "yup"

const TITLE_MIN_LENGTH = 3
const TITLE_MAX_LENGTH = 15

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required(`The Title field is required.`)
    .min(
      TITLE_MIN_LENGTH,
      `Title must be at least ${TITLE_MIN_LENGTH} character long.`
    )
    .max(
      TITLE_MAX_LENGTH,
      `Title can't be longer that ${TITLE_MAX_LENGTH} characters.`
    ),
})


 <Formik
  validationSchema={validationSchema}
  initialValues={{
    title: ``,
  }}
  onSubmit={values => {...}}
>
  {({
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
  }) => (
    <Form noValidate>
      <InputField
        id="titleField"
        hasError={!!(touched.title && errors.title)}
        hasHint={true}
      >
        <InputField.Wrapper>
          <InputField.Label isRequired={true}>Title</InputField.Label>
          <InputField.Control
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <InputField.Hint>
            Must be at least {TITLE_MIN_LENGTH} and not more than {TITLE_MAX_LENGTH} characters
          </InputField.Hint>
          <InputField.Error>
            {touched.title && errors.title ? errors.title : ``}
          </InputField.Error>
        </InputField.Wrapper>
      </InputField>
  ...
```

### with \*FieldBlock(s)

This is the way we would use `Blocks` without Formik. We have to manually pass all Formik method to the `\*FieldBlock" components.

```javascript

... here everything the same as in the previous example

 {({
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
  }) => (
    <Form noValidate>
      <InputFieldBlock
        id="titleField"
        label="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.title && errors.title ? errors.title : ``}
        hint={`Must be at least ${TITLE_MIN_LENGTH} and not more than ${TITLE_MAX_LENGTH} characters`}
        required
      />
  ...
```

### with \*ConnectedField(s)

In cases we are in a hurry :) But seriously, in case we do not need any customization or manual managing (passing `ref`) we should go this way.

`*ConnectedField`s component are created with Formik `connect` (HoC) so we do not need to manually pass Formik methods (`handleChange, chandleBlur`) and state (`errors, values, touched`) to it. Besides that they autogenerate `id` and `label` props based on `name`. For example with `name` value `title` there are autogenerated `id = "titleField"` and `label = "Title"`.

The `case` package takes care of a proper shape of the autogenerated `label` value, for `name` values:

- `mainDescription`
- `main-description`
- `main_description`

we always get `Main description` as a value of `label` (Sentence case)

You can override all auto applied `props`.

```javascript

... here everything the same as in the previous examples

 {() => (
    <Form noValidate>
      <InputConnectedField
        name="title"
        hint={`Must be at least ${TITLE_MIN_LENGTH} and not more than ${TITLE_MAX_LENGTH} characters`}
        required
      />
  ...
```

If we do not need a `hint` and `required` flag on `Label` like in the example above, the only `prop` we have to pass to a `*ConnectdField` type component to make it work is the prop `name` and `options` if applicable (`RadioButton`, `Select`, `CheckboxGroup`).

```javascript
<TextAreaConnectedField name="description" />
```