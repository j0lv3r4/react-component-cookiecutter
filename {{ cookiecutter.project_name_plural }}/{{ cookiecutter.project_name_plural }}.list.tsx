import { match, P } from "ts-pattern";
import * as H from "./{{ cookiecutter.project_name_plural }}.hooks.ts";

const {{ cookiecutter.project_name_plural }}List = () => {
  const {{ cookiecutter.project_name_plural_lower }} = H.useGet{{ cookiecutter.project_name_plural }}();

  return (
    <div>
      <h1>{{ cookiecutter.project_name_plural }}</h1>

      <br />
      {match({{ cookiecutter.project_name_plural_lower }})
        .with({ isLoading: true }, () => <div>Loading...</div>)
        .with({ isError: true }, () => <div>Error</div>)
        .with(
          { isLoading: false, isError: false, data: P.not(P.nullish) },
          ({ data }) => {
            return (
              <ul>
                {data.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            );
          },
        )
        .otherwise(() => null)}
    </div>
  );
};

export { {{ cookiecutter.project_name_plural }}List };
