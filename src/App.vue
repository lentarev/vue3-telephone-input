<script setup lang="ts">
import UiCountryCode from "./components/ui/UiCountryCode.vue";
import UiPhoneInput from "./components/ui/UiPhoneInput.vue";
import type { PhoneNumber } from "libphonenumber-js";
import { type Ref, ref } from "vue";

const props = defineProps({
  placeholder: { type: String, default: "Your phone number" },
});
const emit = defineEmits(["update:modelValue", "details"]);

const country: Ref<string | undefined> = ref("");
const phone: Ref<string> = ref("");
const isValid: Ref<boolean | undefined> = ref();

const onPhoneNumberDetails = (val: PhoneNumber) => {
  country.value = val?.country;
  isValid.value = val?.isValid();

  emit("update:modelValue", { phoneNumber: phone.value, isValid: isValid.value });
};
</script>

<template>
  <div class="vue3-telephone-input">
    <div
      :class="{
        'vue3-telephone-input__input': true,
        'vue3-telephone-input__input_valid': isValid === true,
        'vue3-telephone-input__input_error': isValid === false,
      }"
    >
      <UiCountryCode class="vue3-telephone-input__input-code" :country-code="country" :is-valid="isValid" />
      <UiPhoneInput
        class="vue3-telephone-input__input-number"
        v-on:details="onPhoneNumberDetails"
        v-model="phone"
        :placeholder="props.placeholder"
      />
    </div>
  </div>
</template>

<style lang="scss">
body {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif;

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vue3-telephone-input {
  --bg-input: rgb(244, 246, 250);
  --bg-input-success: #f0fff0;
  --bg-input-error: rgb(255, 245, 245);
  --color-border: #d4d4d4;
  --color-input-text: #2a2a2a;
  --color-input-success-text: #268f0d;
  --color-input-error-text: #c24f41;

  --padding-input: 2px 12px;
  --border-radius-input: 6px;
  --border-input: #b4b4b4;

  &__input {
    display: flex;
    align-items: center;
    padding: var(--padding-input);
    border-radius: var(--border-radius-input);
    background: var(--bg-input);
    border: 1px solid var(--border-input);
  }

  &__input_valid {
    background: var(--bg-input-success);
  }

  &__input_error {
    background: var(--bg-input-error);
  }

  &__input-code {
    padding: 0 2px;
    height: 24px;
  }

  &__input-number {
    display: flex;
  }
}
</style>
