import axios, { AxiosResponse } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as C from "./NounInPlural.const.ts";
import type * as T from "./NounInPlural.types.ts";

const insertNounInPlural = async (payload: T.NounInPluralInsert) => {
  const response: AxiosResponse<T.NounInPluralGet> = await axios.post(
    C.API_URL,
    payload,
  );

  return response.data;
};

const useInsertNounInPlural = () => {
  return useMutation({
    mutationKey: [C.MUTATION_INSERT_QUERY],
    mutationFn: insertNounInPlural,
  });
};

const getNounInPlural = async () => {
  const response: AxiosResponse<T.NounInPluralGet[]> = await axios.get(
    C.API_URL,
  );
  return response.data;
};

const useGetNounInPlural = () => {
  return useQuery({
    queryKey: [C.GET_QUERY],
    queryFn: getNounInPlural,
  });
};

export { useGetNounInPlural, insertNounInPlural, useInsertNounInPlural };
