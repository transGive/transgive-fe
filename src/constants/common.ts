export enum ResponseCode {
    SUCCESS = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    VALIDATION_ERROR = 422,
    SERVER_ERROR = 500,
  }

  export const DATE_FORMAT = {
    SHORT_MONTH_YEAR: 'MM/yy',
    BASIC_DATE: 'DD-MM-YYYY',
    FULL_DATE_TIME: 'YYYY/MM/DD HH:mm',
    ISO_DATE: 'YYYY-MM-DD',
    FULL_DATE_WITH_TIME: 'HH:mm DD MMM YYYY',
  } as const;