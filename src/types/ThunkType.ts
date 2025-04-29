import { RootState } from "../reduxTK/store";

export type ApiThunkConfig<Return, Arg = void, Rejected = string> = {
  fulfilled: Return;
  arg: Arg;
  rejected: Rejected;
  extra?: unknown;
  state: RootState;
};
