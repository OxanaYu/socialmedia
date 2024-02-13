import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({count, page, handleChange}) => {
  return (
    <Stack spacing={3}>
      <Typography sx={{display:"flex", justifyContent: "center"}}>Page{page}</Typography>
    <Pagination sx={{display:"flex", justifyContent: "center"}} count={count} shape="rounded"  variant="outlined" color="primary" onChange={(e, value)=> handleChange(value)} />
    </Stack>
  )
};

export default PaginationControlled ;
