import { TextField, debounce } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "./catalogSlice";
import { ChangeEvent, useState } from "react";

export default function ProductSearch() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);

  const debouncedSearch = debounce(
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch(setProductParams({ searchTerm: event.target.value })),
    1000
  );

  return (
    <TextField
      label="Search products"
      variant="outlined"
      fullWidth
      value={searchTerm || ""}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        debouncedSearch(e);
      }}
    />
  );
}
