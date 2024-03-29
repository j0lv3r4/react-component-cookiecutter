import * as _ from "lodash-es";
import { match, P } from "ts-pattern";
import { NounInPluralForm as Form } from "./NounInPlural.form.tsx";
import * as H from "./NounInPlural.hooks.ts";

const NounInPluralDetail = () => {
  const nounInPlural = H.useGetNounInPlural();
  return (
    <div>
      <h1>Noun</h1>

      <br />
      {match(nounInPlural)
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

export { NounInPluralDetail };
