import * as Yup from "yup";

const SearchPostScheme = Yup.object().shape({
  searchInput: Yup.string().max(40, "global:FormsValidation:maxLength"),
});

export default SearchPostScheme;
