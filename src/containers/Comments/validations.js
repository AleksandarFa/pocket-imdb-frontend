import * as Yup from "yup";
import { COMMENT_MAX } from "../../consts/validations";

const commentForm = Yup.object().shape({
  comment: Yup.string()
    .required()
    .max(COMMENT_MAX, "Comments can have only 500 chars."),
});

export default commentForm;
