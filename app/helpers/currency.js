import { helper } from '@ember/component/helper';

export default helper(function currency(positional /*, named*/) {
  console.log({ positional });
  const [number] = positional;
  return positional;
});
