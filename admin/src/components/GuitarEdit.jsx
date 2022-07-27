import { Edit, SimpleForm, TextInput } from "react-admin";

export default function GuitarEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="picture" />
        <TextInput source="frontpicture" />
        <TextInput source="backpicture" />
        <TextInput source="botpicture" />
        <TextInput source="toppicture" />
        <TextInput source="label" />
        <TextInput source="brand" />
        <TextInput source="price" />
        <TextInput source="style" />
        <TextInput source="style" />
        <TextInput source="wood" />
        <TextInput source="fret" />
        <TextInput source="tunningfork" />
      </SimpleForm>
    </Edit>
  );
}
