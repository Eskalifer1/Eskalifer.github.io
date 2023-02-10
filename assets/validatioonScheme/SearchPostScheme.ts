import * as Yup from "yup";

const SearchPostScheme = Yup.object().shape({
    search: Yup.string()
        .max(100, 'Write a little bit less')
})

export default SearchPostScheme;