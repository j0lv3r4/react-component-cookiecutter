import * as _ from "lodash-es";
import { match, P } from "ts-pattern";
import { {{ cookiecutter.project_name_plural }}Form as Form } from "./{{ cookiecutter.project_name_plural }}.form.tsx";
import * as H from "./{{ cookiecutter.project_name_plural }}.hooks.ts";

const {{ cookiecutter.project_name_plural }}Detail = () => {
  const {{ cookiecutter.project_name_plural_lower }} = H.useGet{{ cookiecutter.project_name_plural }}();
  return (
    <div>
      <h1>{{ cookiecutter.project_name }}</h1>

      <br />
      {match({{ cookiecutter.project_name_plural_lower }})
        .with({ isLoading: true }, () => <p>Loading...</p>)
        .with({ isError: true }, () => <p>Error</p>)
        .with(
          { isLoading: false, isError: false, data: P.not(P.nullish) },
          ({ data }) => {
            const dataItem = _.first(data);
            return <Form defaultValues={dataItem} />;
          },
        )
        .otherwise(() => null)}
    </div>
  );
};

export { {{ cookiecutter.project_name_plural }}Detail };
