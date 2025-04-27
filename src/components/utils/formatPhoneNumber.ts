function useFormatPhoneNumber(phoneNumber: string | null, countryCallingCode: string | undefined) {
  if (phoneNumber !== null) {
    switch (true) {
      case countryCallingCode?.length === 1:
        return phoneNumber.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/g, `$1 ($2) $3-$4-$5`);

      case countryCallingCode?.length === 3:
        return phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/g, `$1 ($2) $3-$4-$5`);

      default:
        return phoneNumber.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/g, `$1 ($2) $3-$4-$5`);
    }
  } else {
    return "";
  }
}

export { useFormatPhoneNumber };
