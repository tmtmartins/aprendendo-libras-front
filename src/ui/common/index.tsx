import React from "react";
import { useLocation } from "react-router-dom";

export function useUrlQuery(): URLSearchParams {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function urlSearchParamsToObject(params: URLSearchParams) {
  if (params.toString() === "") return JSON.parse("{}");

  return JSON.parse(
    `{"${decodeURI(
      params.toString().replace(/&/g, '","').replace(/=/g, '":"')
    )}"}`
  );
}
