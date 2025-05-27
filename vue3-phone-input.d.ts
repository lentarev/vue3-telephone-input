declare module "vue3-telephone-input" {
  interface IVue3TelephoneInput {
    phoneNumber: string;
    isValid: boolean | undefined;
  }

  import Vue3TelephoneInput from "vue3-telephone-input/dist/vue3-telephone-input.es";
  export default Vue3TelephoneInput;
}
