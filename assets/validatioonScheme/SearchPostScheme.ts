import { i18n } from "next-i18next";
import * as Yup from "yup";

const SearchPostScheme = Yup.object().shape({
  search: Yup.string().max(
    100,
    i18n?.t("global:FormsValidation:maxLength", { length: 100 }) || ""
  ),
});

export default SearchPostScheme;
