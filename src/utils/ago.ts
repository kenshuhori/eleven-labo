import dayjs from "dayjs";
import localeEn from "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";

export const transformAgo = (postDate: string) => {
  dayjs.extend(relativeTime).locale(localeEn);
  return dayjs(postDate).fromNow();
};
