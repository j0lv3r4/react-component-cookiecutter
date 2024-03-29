import axios, { AxiosResponse } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as C from "./{{ cookiecutter.project_name_plural }}.const.ts";
import type * as T from "./{{ cookiecutter.project_name_plural }}.types.ts";

const insert{{ cookiecutter.project_name_plural }} = async (payload: T.{{ cookiecutter.project_name_plural }}Insert) => {
  const response: AxiosResponse<T.{{ cookiecutter.project_name_plural }}Get> = await axios.post(
    C.API_URL,
    payload,
  );

  return response.data;
};

const useInsert{{ cookiecutter.project_name_plural }} = () => {
  return useMutation({
    mutationKey: [C.MUTATION_INSERT_QUERY],
    mutationFn: insert{{ cookiecutter.project_name_plural }},
  });
};

const get{{ cookiecutter.project_name_plural }} = async () => {
  const response: AxiosResponse<T.{{ cookiecutter.project_name_plural }}Get[]> = await axios.get(
    C.API_URL,
  );
  return response.data;
};

const useGet{{ cookiecutter.project_name_plural }} = () => {
  return useQuery({
    queryKey: [C.GET_QUERY],
    queryFn: get{{ cookiecutter.project_name_plural }},
  });
};

export { useGet{{ cookiecutter.project_name_plural }}, insert{{ cookiecutter.project_name_plural }}, useInsert{{ cookiecutter.project_name_plural }} };
