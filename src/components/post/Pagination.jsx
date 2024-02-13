import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({count, page, handleChange}) => {
  return (
    <Stack spacing={3}>
      <Typography>Page{page}</Typography>
    <Pagination count={count} color="primary" onChange={(e, value)=> handleChange(value)} />
    </Stack>
  )
};

export default PaginationControlled ;
