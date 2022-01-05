import { Input } from "../styled/textbox/Input";

export default function TextField({ setFieldValue, id, label, type }) {
    return(
        <Input type={type} id={id} />
    );
}