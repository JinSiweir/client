// noinspection NonAsciiCharacters
import merge from 'lodash/merge';
import tdesignLocale from 'tdesign-vue-next/es/locale/en_US';

export default {
  lang: 'English',
  userName: 'Siweir',
  tdesignLocale: merge(tdesignLocale, {
    // 可以在此处定义更多自定义配置，具体可配置内容参看 API 文档
    // https://tdesign.tencent.com/vue-next/config?tab=api
    // pagination: {
    //   jumpTo: 'xxx'
    // },
  }),
};
