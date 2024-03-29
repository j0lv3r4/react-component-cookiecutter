import { match, P } from "ts-pattern";
import * as H from "./NounInPlural.hooks.ts";

const NounInPluralList = () => {
  const nounInPlural = H.useGetNounInPlural();

  return (
    <div>
      <h1>NounInPlural</h1>

      <br />
      {match(nounInPlural)
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

export { NounInPluralList };
