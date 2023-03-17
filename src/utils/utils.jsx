const myLocale = new Intl.Locale(
  'en-Latn-AU', {
    numberingSystem: 'latn' 
  }
);

export const currencyFormatter = new Intl.NumberFormat(
  myLocale, {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
  }
)